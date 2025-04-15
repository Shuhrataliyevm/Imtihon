import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { IoLockClosed, IoEyeOutline, IoEyeOffOutline, IoPhonePortraitOutline, IoPersonOutline } from 'react-icons/io5';
import { toast } from 'sonner';
import '../../styles/register.scss';

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
            toast.error('Parollar mos kelmadi');
            setError('Parollar mos kelmadi');
            return;
        }

        if (!formData.phoneNumber.match(/^\+998[0-9]{9}$/)) {
            toast.error('Telefon raqami notogri formatda (+998xxxxxxxxx)');
            setError('Telefon raqami notogri formatda (+998xxxxxxxxx)');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('https://s-libraries.uz/api/v1/auth/register-library/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        password: formData.password,
                        name: formData.fullName,
                        phone: formData.phoneNumber
                    },
                    library: {
                        address: "Tashkent",
                        social_media: [],
                        can_rent_books: true,
                        latitude: "0",
                        longitude: "0"
                    }
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Royxatdan otishda xatolik');
            }

            toast.success('Muvaffaqiyatli royxatdan otdingiz!');
            navigate('/login');
        } catch (err) {
            console.error('Registration error:', err);
            toast.error((err as Error).message || 'Royxatdan otishda xatolik yuz berdi');
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
                    <h2>Ro'yxatdan o'tish</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>To'liq ism</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="To'liq ismingizni kiriting"
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
                                'Royxatdan otish'
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
                    <p>Ro'yxatdan o'tish uchun ma'lumotlaringizni kiriting</p>
                </div>
            </div>
        </div>
    );
};

export default Register;
