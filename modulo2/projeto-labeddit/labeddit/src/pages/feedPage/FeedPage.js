import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { URL_BASE } from "../../constants/url.js"
import { CardsPostContainer, NewPostCard, PostCard, MainContainer } from "./styles";
import NewPostForm from "./components/NewPostForm";
import { goToPost } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import unClickedLike from "../../assets/up-arrow.png"
import clickedLike from "../../assets/up-arrow-full.png"
import unClickedDisLike from "../../assets/down-arrow.png"
import clickedDisLike from "../../assets/down-arrow-full.png"


const FeedPage = ({setPostDetail}) => {
    useProtectedPage();
    const [postsList, listReoadController] = useRequestData([], `${URL_BASE}/posts`);
    const navigate = useNavigate();

    const seeCommentsPost = (postId, username, title, content) => {
        setPostDetail(
            {
                username: username,
                postTitle: title,
                postContent: content
            }
        );

        goToPost(navigate, postId);
    };
    
    const formatedPostsList = postsList.length && postsList.map((post) => {
        return (
            <PostCard key={post.id}>
                <div onClick={() => seeCommentsPost(post.id, post.username, post.title, post.body) }>
                    <h3>{post.username}</h3>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </div>
                {!post.userVote && <img src={unClickedLike} alt="Ícone de curtido não clicado"/>}
                {post.userVote === -1 && <img src={unClickedLike} alt="Ícone de curtido não clicado"/>}
                {post.userVote === 1 && <img src={clickedLike} alt="Ícone de curtido clicado"/>}
                <span>{post.voteSum ? post.voteSum : 0 }</span>
                {!post.userVote && <img src={unClickedDisLike} alt="Ícone de descurtido não clicado"/>}
                {post.userVote === 1 && <img src={unClickedDisLike} alt="Ícone de descurtido não clicado"/>}
                {post.userVote === -1 && <img src={clickedDisLike} alt="Ícone de descurtido clicado"/>}
                <p>Comentários {post.commentCount ? post.commentCount : 0}</p>
            </PostCard>
        );
    });

    return (
        <MainContainer>
            <NewPostCard>
                <NewPostForm listReoadController={listReoadController}/>
            </NewPostCard>
            <CardsPostContainer>{formatedPostsList}</CardsPostContainer>
        </MainContainer>
    );
};

export default FeedPage;