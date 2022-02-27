import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { URL_BASE } from "../../constants/url.js"
import { CardsPostContainer, NewPostCard, PostCard, MainContainer, VotesAndCommentsContainer, CommentContainer, PostContent } from "./styles";
import NewPostForm from "./components/newPostForm/NewPostForm";
import { goToPost } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import comment from "../../assets/comment.png"
import Votes from "./components/votesPost/Votes.js";
import { Typography } from "@mui/material";


const FeedPage = () => {
    useProtectedPage();
    const [postsList, listReoadController] = useRequestData([], `${URL_BASE}/posts`);
    const navigate = useNavigate();

    const seeCommentsPost = (postId) => {
        goToPost(navigate, postId);
    };
    
    const formatedPostsList = postsList.length && postsList.map((post) => {
        return (
            <PostCard key={post.id}>
                <PostContent onClick={() => seeCommentsPost(post.id) }>
                    <h3>Postado por {post.username}</h3>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </PostContent>
                <VotesAndCommentsContainer>
                    <Votes userVote={Number(post.userVote)} voteSum={Number(post.voteSum)} id={post.id} />
                    <CommentContainer onClick={() => seeCommentsPost(post.id) }>
                        <img src={comment} alt="Ícone de comentários"/>
                        <p>{post.commentCount ? post.commentCount : 0} Comentários</p>
                    </CommentContainer>
                </VotesAndCommentsContainer>
            </PostCard>
        );
    });

    return (
        <MainContainer>
            <NewPostCard>
                <Typography variant="h5" align="center">Comece uma nova publicação</Typography>
                <NewPostForm listReoadController={listReoadController}/>
            </NewPostCard>
            <CardsPostContainer>{formatedPostsList}</CardsPostContainer>
        </MainContainer>
    );
};

export default FeedPage;