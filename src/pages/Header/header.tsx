import { Link } from "react-router-dom";
import "../../styles/header.scss";
import { NavLink } from "react-router-dom";
const header = () => {
    return (
        <div className="header">
            <div className="text-logo">
                <Link to={"/"}><h1>Ezma</h1></Link>
            </div>
            <div className="header-links">
                <NavLink to="/">Bosh sahifa</NavLink>
                <NavLink to="/about">Biz haqimizda</NavLink>
                <NavLink to="/librarydetail">Kutubxona tafsilotlari</NavLink>
                <NavLink to="/libraryprofile">Kutubxona profile</NavLink>
            </div>
            <div className="header-btn">
                <button onClick={() => window.location.href = "/login"}><span>Login</span></button>
                <button onClick={() => window.location.href = "/register"}><span>Register</span></button>
            </div>
        </div>
    );
}

export default header