import { Link } from "react-router-dom";
import "../../styles/home.scss";
const Home = () => {

    return (
        <div className="Home-container">
            <div className="header">
                <div className="text-logo">
                    <h1>Ezma</h1>
                </div>
                <div className="header-links">
                    <Link to="/home">Bosh sahifa</Link>
                    <Link to="/about">Biz haqimizda</Link>
                    <Link to="/librarydetail">Kutubxona tafsilotlari</Link>
                    <Link to="/libraryprofile">Kutubxona profile</Link>
                </div>
                <div className="header-btn">
                    <button><span>Login</span></button>
                    <button><span>Register</span></button>
                </div>
            </div>
            <div className="search">
                <div className="search-data">
                    <h4>O'zbekiston kutubxonalaridagi <br /> kitoblarni qidiring</h4>
                    <p>Ezma - bu kutubxonalarda kitoblarni izlash va topish uchun qulay va tez platforma</p>
                    <input type="text" placeholder="Qidirish..." />
                    <button><span>Qidirish</span></button>
                </div>
            </div>
        </div>
    );
};

export default Home;
