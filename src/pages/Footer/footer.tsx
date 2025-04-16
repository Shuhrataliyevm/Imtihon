import { Link } from "react-router-dom";
import "../../styles/footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__about">
                    <h2 className="footer__logo">Ezma</h2>
                    <p>
                        Kutubxonalarda kitoblarni qidirib topish uchun eng qulay va zamonaviy platforma
                    </p>
                </div>
                <div className="footer__sections">
                    <div className="footer__column">
                        <h3>Navigatsiya</h3>
                        <ul>
                            <li><Link to="/">Bosh sahifa</Link></li>
                            <li><Link to="/librarylist">Kutubxonalar ro'yxati</Link></li>
                            <li><Link to="/about">Biz haqimizda</Link></li>
                        </ul>
                    </div>
                    <div className="footer__column">
                        <h3>Foydali havolalar</h3>
                        <ul>
                            <li><Link to="/">Ko'p so'raladigan savollar</Link></li>
                            <li><Link to="/">Maxfiylik siyosati</Link></li>
                            <li><Link to="/">Foydalanish shartlari</Link></li>
                        </ul>
                    </div>
                    <div className="footer__column">
                        <h3>Bog'lanish</h3>
                        <ul>
                            <li><a href="mailto:info@ezma.uz">info@ezma.uz</a></li>
                            <li><a href="tel:+998 71 123 4567">+998 71 123 4567</a></li>
                            <li><span>Toshkent, O'zbekiston</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <p>© 2025 Ezma. Barcha huquqlar himoyalangan.</p>
                <div className="footer-image">
                    <img style={{width:'30px', height:'30px', }} src="/images/fasebook.gif" alt="#" />
                    <img style={{width:'30px', height:'30px', }} src="/images/instagram.gif" alt="#" />
                    <img style={{width:'30px', height:'30px', }} src="/images/twiter.gif" alt="#" />
                    <img style={{width:'30px', height:'30px', }} src="/images/github.gif" alt="#" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
