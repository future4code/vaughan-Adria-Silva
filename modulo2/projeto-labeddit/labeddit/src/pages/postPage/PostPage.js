import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import { getPostComments } from "../../services/comments.js";
import useRequestData from "../../hooks/useRequestData";
import { URL_BASE } from "../../constants/url";
import { Card, Typography } from "@mui/material";
import NewCommentForm from "./components/newCommentForm/NewCommentForm";
import Votes from "../feedPage/components/votesPost/Votes.js";
import comment from "../../assets/comment.png"
import VotesComments from "./components/votesOnComments/VotesComments";
import { PostCard, CommentContent, PostContent, VotesAndCommentsContainer, MainContainer, CommentContainer, NewPostCard, CardsCommentContainer, CommentCard} from "./styles";

const PostPage = () => {
    useProtectedPage();

    const params = useParams();
    const [commentsList, setCommentsList] = useState([]);
    const [reloadList, setReloadList] = useState(false);
    const [numOfComments, setNumOfComments] = useState(0);
    
    const listReoadController = () => setReloadList(!reloadList);

    useEffect(()=>{
        getPostComments(params.id, setCommentsList, setNumOfComments);
    },[reloadList])

    const [postsList] = useRequestData([], `${URL_BASE}/posts`);
    const currentPost = postsList.filter((post)=>{
        return post.id === params.id
    });
    
    const formatedCommentList = commentsList.length && commentsList.map((comment) => {
        return (
            <CommentCard key={comment.id}>
                <CommentContent>
                    <h4>{comment.username}</h4>
                    <p>{comment.body}</p>
                </CommentContent>
                <VotesComments 
                    userVote={Number(comment.userVote)} 
                    voteSum={Number(comment.voteSum)} 
                    id={comment.id}
                />
            </CommentCard>
        );
    });

    return (
        <MainContainer>
            {currentPost.length &&
            <PostCard>
                <PostContent>
                    <h3>{currentPost[0].username}</h3>
                    <h2>{currentPost[0].title}</h2>
                    <p>{currentPost[0].body}</p>
                </PostContent>
                <VotesAndCommentsContainer>
                    <Votes 
                        userVote={Number(currentPost[0].userVote)} 
                        voteSum={Number(currentPost[0].voteSum)} 
                        id={currentPost[0].id}
                    />
                    <CommentContainer>
                        <img src={comment} alt="Ícone de comentários"/>
                        <p>{numOfComments} Comentários</p>
                    </CommentContainer>
                </VotesAndCommentsContainer>
            </PostCard>
            }

            <NewPostCard>
                <Typography variant="h6" align="center">Adicione um novo comentário</Typography>
                <NewCommentForm 
                    listReoadController={listReoadController}
                    setNumOfComments={setNumOfComments}
                    numOfComments={numOfComments}
                />
            </NewPostCard>

            {commentsList.length
            ? <CardsCommentContainer>{formatedCommentList}</CardsCommentContainer>
            : <p>Não há comentários neste post!</p>
            }            
        </MainContainer>);
};

export default PostPage;