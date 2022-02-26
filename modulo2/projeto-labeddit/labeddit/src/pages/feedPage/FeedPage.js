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
import Votes from "./components/Votes";


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
                <Votes userVote={Number(post.userVote)} voteSum={Number(post.voteSum)} id={post.id} />
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