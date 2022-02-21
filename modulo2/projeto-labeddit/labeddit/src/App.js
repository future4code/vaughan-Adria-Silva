import CreateAccountPage from "./pages/createAccountPage/CreateAccount";
import FeedPage from "./pages/feedPage/FeedPage";
import LoginPage from "./pages/loginPage/LoginPage";
import PostPage from "./pages/postPage/PostPage";

const App = () => {
  return (
    <div>
      Labeddit
      <CreateAccountPage />
      <FeedPage />
      <LoginPage />
      <PostPage />
    </div>
  );
}

export default App;
