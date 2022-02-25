import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { URL_BASE } from "../../constants/url.js"
import { CardsPostContainer, NewPostCard, PostCard, MainContainer } from "./styles";
import NewPostForm from "./components/NewPostForm";
import { goToPost } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

const FeedPage = () => {
    useProtectedPage();
    const [postsList, listReoadController] = useRequestData([], `${URL_BASE}/posts`);
    const navigate = useNavigate();

    const seeCommentsPost = postId => goToPost(navigate, postId);
    
    const formatedPostsList = postsList.length && postsList.map((post) => {
        return (
            <PostCard key={post.id}>
                <div onClick={() => seeCommentsPost(post.id) }>
                    <h3>{post.username}</h3>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </div>
                <p>Votos: {post.voteSum ? post.voteSum : 0}</p>
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