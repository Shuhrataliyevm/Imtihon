import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";
import Login from "../pages/Login/login";
import Register from "../pages/Register/register";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error/error";
import About from "../pages/About/about";
import LibraryDetail from "../pages/LibraryDetail/libraryDetail";
import LibraryProfile from "../pages/LibraryProfile/libraryProfile";
const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<PrivateRoute />}>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/librarydetail" element={<LibraryDetail />} />
                <Route path="/libraryprofile" element={<LibraryProfile />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
};

export default Router;
