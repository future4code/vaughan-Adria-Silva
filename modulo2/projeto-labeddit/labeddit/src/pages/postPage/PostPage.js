import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import { getPostComments } from "../../services/comments.js";
import { CircularProgress, Typography } from "@mui/material";
import NewCommentForm from "./components/newCommentForm/NewCommentForm";
import Votes from "../feedPage/components/votesPost/Votes.js";
import comment from "../../assets/comment.png"
import VotesComments from "./components/votesOnComments/VotesComments";
import { PostCard, CommentContent, PostContent, VotesAndCommentsContainer, MainContainer, CommentContainer, NewPostCard, CardsCommentContainer, CommentCard} from "./styles";

const PostPage = ({postDetail}) => {
    useProtectedPage();

    const params = useParams();
    const [commentsList, setCommentsList] = useState([]);
    const [reloadList, setReloadList] = useState(false);
    const [numOfComments, setNumOfComments] = useState(postDetail.commentCount);
    const [isLoading, setIsLoading] = useState(false);
    
    const listReoadController = () => setReloadList(!reloadList);

    useEffect(()=>{
        getPostComments(params.id, setCommentsList, setNumOfComments, setIsLoading);
    },[reloadList])
    
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
            <PostCard>
                <PostContent>
                    <h3>{postDetail.username}</h3>
                    <h2>{postDetail.title}</h2>
                    <p>{postDetail.body}</p>
                </PostContent>
                <VotesAndCommentsContainer>
                    <Votes 
                        userVote={Number(postDetail.userVote)} 
                        voteSum={Number(postDetail.voteSum)} 
                        id={params.id}
                    />
                    <CommentContainer>
                        <img src={comment} alt="??cone de coment??rios"/>
                        <p>{numOfComments ? numOfComments : 0} Coment??rios</p>
                    </CommentContainer>
                </VotesAndCommentsContainer>
            </PostCard>

            <NewPostCard>
                <Typography variant="h6" align="center">Adicione um novo coment??rio</Typography>
                <NewCommentForm 
                    listReoadController={listReoadController}
                    setNumOfComments={setNumOfComments}
                    numOfComments={numOfComments}
                />
            </NewPostCard>

            {commentsList.length
            ? <CardsCommentContainer>{formatedCommentList}</CardsCommentContainer>
            : isLoading ? <CircularProgress sx={{margin:"1rem"}} /> : <p>N??o h?? coment??rios neste post!</p>
            }            
        </MainContainer>);
};

export default PostPage;