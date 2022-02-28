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


const FeedPage = ({setPostDetail}) => {
    useProtectedPage();
    
    const [postsList, listReoadController] = useRequestData([], `${URL_BASE}/posts`);
    const navigate = useNavigate();

    const seeCommentsPost = (postId, postUsername, postTitle, postBody, postVoteSum, postUserVote, postCommentCount ) => {
        goToPost(navigate, postId);
        setPostDetail(
            {
                username: postUsername,
                title: postTitle,
                body: postBody,
                voteSum: postVoteSum,
                userVote: postUserVote,
                commentCount: postCommentCount
            }
        );
    };
    
    const formatedPostsList = postsList.length && postsList.map((post) => {
        return (
            <PostCard key={post.id}>
                <PostContent onClick={() => seeCommentsPost(post.id, post.username, post.title, post.body, post.voteSum, post.userVote, post.commentCount)} >
                    <h3>Postado por {post.username}</h3>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </PostContent>
                <VotesAndCommentsContainer>
                    <Votes userVote={Number(post.userVote)} voteSum={Number(post.voteSum)} id={post.id} />
                    <CommentContainer onClick={() => seeCommentsPost(post.id, post.username, post.title, post.body, post.voteSum, post.userVote, post.commentCount)} >
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
            {formatedPostsList.length
            ? <CardsPostContainer>{formatedPostsList}</CardsPostContainer>
            : <p>Carregando o feed</p>
            }
        </MainContainer>
    );
};

export default FeedPage;