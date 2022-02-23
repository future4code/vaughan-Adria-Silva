import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/usRequestData";
import { URL_BASE } from "../../constants/url.js"
import { CardsPostContainer, PostCard } from "./styles";

const FeedPage = () => {
    useProtectedPage();
    const postsList = useRequestData([], `${URL_BASE}/posts`);
    
    const postsListFormated = postsList.length && postsList.map((post) => {
        return (
            <PostCard key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </PostCard>
        );
    });

    return (
        <main> 
            <CardsPostContainer>{postsListFormated}</CardsPostContainer>
        </main>
    );
};

export default FeedPage;