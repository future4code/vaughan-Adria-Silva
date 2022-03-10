import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccountPage from "../pages/createAccountPage/CreateAccount";
import FeedPage from "../pages/feedPage/FeedPage";
import LoginPage from "../pages/loginPage/LoginPage";
import PostPage from "../pages/postPage/PostPage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Header from "../components/header/header";

const Router = ({ setLogInOut, postDetail, setPostDetail }) => {
    return (
        <Routes>
		    <Route path="/" element={<FeedPage setPostDetail={setPostDetail} />} />
		    <Route path="/post/:id" element={<PostPage postDetail={postDetail} />} />
		    <Route path="/login" element={<LoginPage setLogInOut={setLogInOut}/>} />
		    <Route path="/signup" element={<CreateAccountPage setLogInOut={setLogInOut}/>} />
		    <Route path="*" element={<ErrorPage />} />
        </Routes>           
    );
};

export default Router;