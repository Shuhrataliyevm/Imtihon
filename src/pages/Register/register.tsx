import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { IoMail, IoLockClosed, IoEyeOutline, IoEyeOffOutline, IoPersonOutline, IoPhonePortraitOutline } from 'react-icons/io5';
import '../../ui/Register.scss';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        fullName: '',
        phoneNumber: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('Parollar mos kelmadi');
            return;
        }

        if (!formData.phoneNumber.match(/^\+998[0-9]{9}$/)) {
            setError('Telefon raqami noto‘g‘ri formatda (+998xxxxxxxxx)');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('https://nasiya.takedaservice.uz/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: formData.username,
                    password: formData.password,
                    full_name: formData.fullName,
                    phone_number: formData.phoneNumber
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Ro‘yxatdan o‘tishda xatolik');
            }

            navigate('/login');
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="register-container">
            <div className="register-content">
                <div className="register-left">
                    <div className="logo-container">
                        <img src="/images/logo book.jpg" alt="Logo" />
                    </div>
                    <h2>Ro‘yxatdan o‘tish</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Login</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Loginingizni kiriting"
                                required
                            />
                            <IoMail className="icon" />
                        </div>

                        <div className="form-group">
                            <label>To‘liq ism</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="To‘liq ismingizni kiriting"
                                required
                            />
                            <IoPersonOutline className="icon" />
                        </div>

                        <div className="form-group">
                            <label>Telefon raqami</label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="+998xxxxxxxxx"
                                pattern="\+998[0-9]{9}"
                                title="Format: +998xxxxxxxxx"
                                required
                            />
                            <IoPhonePortraitOutline className="icon" />
                        </div>

                        <div className="form-group">
                            <label>Parol</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Parolingizni kiriting"
                                required
                            />
                            <IoLockClosed className="icon" style={{ right: '45px' }} />
                            {showPassword ? (
                                <IoEyeOffOutline
                                    className="icon"
                                    onClick={() => setShowPassword(false)}
                                />
                            ) : (
                                <IoEyeOutline
                                    className="icon"
                                    onClick={() => setShowPassword(true)}
                                />
                            )}
                        </div>

                        <div className="form-group">
                            <label>Parolni tasdiqlang</label>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Parolni qayta kiriting"
                                required
                            />
                            <IoLockClosed className="icon" style={{ right: '45px' }} />
                            {showConfirmPassword ? (
                                <IoEyeOffOutline
                                    className="icon"
                                    onClick={() => setShowConfirmPassword(false)}
                                />
                            ) : (
                                <IoEyeOutline
                                    className="icon"
                                    onClick={() => setShowConfirmPassword(true)}
                                />
                            )}
                        </div>

                        {error && <div className="error-message">{error}</div>}

                        <button type="submit" className="submit-button" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <span className="loading-spinner"></span>
                                    Kuting...
                                </>
                            ) : (
                                'Ro‘yxatdan o‘tish'
                            )}
                        </button>

                        <div className="login-link">
                            <p>Loginga qaytish <Link to="/login">Login</Link></p>
                        </div>
                    </form>
                </div>

                <div className="register-right">
                    <div className="register-image">
                        <img src="/images/new book picturwes.jpg" alt="Login" />
                    </div>
                    <h1>Xush kelibsiz!</h1>
                    <p>Ro‘yxatdan o‘tish uchun ma’lumotlaringizni kiriting</p>
                </div>
            </div>
        </div>
    );
};

export default Register;
