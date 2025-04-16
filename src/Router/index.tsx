import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home";
import Login from "../pages/Login/login";
import Register from "../pages/Register/register";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error/error";
import About from "../pages/About/about";
import LibraryDetail from "../pages/LibraryDetail/libraryDetail";
import LibraryProfile from "../pages/LibraryProfile/libraryProfile";
import Footer from "../pages/Footer/footer";
import LibraryList from "../pages/LibraryList/libraryList";
import AlotOfBook from "../pages/AlotOfBook/alotofBook";
import Header from "../pages/Header/header";
import BookPage from "../pages/BookPage/BookPage";
const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/librarylist" element={<LibraryList />} />
                <Route path="/librarydetail" element={<LibraryDetail />} />
                <Route path="/libraryprofile" element={<LibraryProfile />} />
                <Route path="/alotofbook" element={<AlotOfBook />} />
                <Route path="/bookpage" element={<BookPage />} />
                <Route path="/header" element={<Header />} />
                <Route path="/footer" element={<Footer />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
};

export default Router;
