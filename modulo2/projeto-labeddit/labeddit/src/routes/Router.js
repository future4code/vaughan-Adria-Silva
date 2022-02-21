import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccountPage from "../pages/createAccountPage/CreateAccount";
import FeedPage from "../pages/feedPage/FeedPage";
import LoginPage from "../pages/loginPage/LoginPage";
import PostPage from "../pages/postPage/PostPage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Header from "../components/header/header";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
		        <Route path="/" element={<FeedPage />} />
		        <Route path="/post/:id" element={<PostPage />} />
		        <Route path="/login" element={<LoginPage />} />
		        <Route path="/signup" element={<CreateAccountPage />} />
		        <Route path="*" element={<ErrorPage />} />
            </Routes>           
        </BrowserRouter>
    );
};

export default Router;