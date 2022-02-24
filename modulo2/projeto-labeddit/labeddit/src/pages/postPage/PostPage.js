import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import { getPostComments } from "../../services/posts.js"

const PostPage = () => {
    useProtectedPage();
    const params = useParams();
    
    useEffect(()=>{
        getPostComments(params.id);
    },[])

    return (<div> PostPage</div>);
};

export default PostPage;