import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import { getPostComments } from "../../services/comments.js";
import useRequestData from "../../hooks/useRequestData";
import { URL_BASE } from "../../constants/url";
import { Card } from "@mui/material";
import NewCommentForm from "./newCommentForm/NewCommentForm";
import Votes from "../feedPage/components/votesPost/Votes.js";
import comment from "../../assets/comment.png"
import VotesComments from "./newCommentForm/VotesComments";

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
            <Card key={comment.id}>
                <h4>{comment.username}</h4>
                <p>{comment.body}</p>
                <VotesComments 
                    userVote={Number(comment.userVote)} 
                    voteSum={Number(comment.voteSum)} 
                    id={comment.id}
                />
            </Card>
        );
    });


    return (
        <main>
            {currentPost.length &&
            <Card>
                <h3>{currentPost[0].username}</h3>
                <p>{currentPost[0].title}</p>
                <p>{currentPost[0].body}</p>
                <Votes 
                    userVote={Number(currentPost[0].userVote)} 
                    voteSum={Number(currentPost[0].voteSum)} 
                    id={currentPost[0].id}
                />
                <img src={comment} alt="Ícone de comentários"/>
                <p>{numOfComments} Comentários</p>
            </Card>
            }

            <Card>
                <NewCommentForm 
                    listReoadController={listReoadController}
                    setNumOfComments={setNumOfComments}
                    numOfComments={numOfComments}
                />
            </Card>

            <div>
                {formatedCommentList}
            </div>
            
        </main>);
};

export default PostPage;