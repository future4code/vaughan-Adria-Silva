import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import { getPostComments } from "../../services/posts.js";
import useRequestData from "../../hooks/useRequestData";
import { URL_BASE } from "../../constants/url";
import { Card } from "@mui/material";
import NewCommentForm from "./newCommentForm/NewCommentForm";

const PostPage = () => {
    useProtectedPage();

    const params = useParams();
    const [commentsList, setCommentsList] = useState([]);
    const [reloadList, setReloadList] = useState(false);

    const listReoadController = () => setReloadList(!reloadList);

    useEffect(()=>{
        getPostComments(params.id, setCommentsList);
    },[reloadList])

    const [postsList] = useRequestData([], `${URL_BASE}/posts`);
    const currentPost = postsList.filter((post)=>{
        return post.id === params.id
    });
    

    const formatedCommentList = commentsList.length && commentsList.map((comment) => {
        return (
            <Card key={comment.id}>
                <>Comentário</>
                <h4>{comment.username}</h4>
                <p>{comment.body}</p>
                <p>Votos: {comment.voteSum}</p>
            </Card>
        );
    });

    console.log("Info dos posts",currentPost);
    console.log("Comentários",currentPost)

    return (
        <main>
            <Card>
                {currentPost[0] && <div>
                    <>Post</>
                    <h3>{currentPost[0].username}</h3>
                    <p>{currentPost[0].body}</p>
                </div>}
            </Card>

            <Card>
                <NewCommentForm listReoadController={listReoadController}/>
            </Card>

            <div>
                {formatedCommentList}
            </div>
            
        </main>);
};

export default PostPage;