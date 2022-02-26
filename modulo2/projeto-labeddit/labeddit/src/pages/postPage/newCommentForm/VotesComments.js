import React, { useState } from "react";
import unClickedLike from "../../../assets/up-arrow.png"
import clickedLike from "../../../assets/up-arrow-full.png"
import unClickedDisLike from "../../../assets/down-arrow.png"
import clickedDisLike from "../../../assets/down-arrow-full.png"
import { createCommentVote, changeCommentVote, deleteCommentVote } from "../../../services/comments";

const VotesComments = ({userVote, voteSum, id}) => {
    const [vote, setVote] = useState(userVote);
    const [voteCount, setVoteCount] = useState(voteSum);

    const like = 1;
    const dislike = -1;
    const noLikes = 0;

    const liked = { "direction": 1 };
    const unliked = { "direction": -1 };
    
    const clickOnLike = () => {
        if(vote === like) {
            deleteCommentVote(id);
            setVote(noLikes);
            setVoteCount(voteSum);
        } else if (vote === dislike) {
            changeCommentVote(id, liked);
            setVote(like);
            setVoteCount(voteSum + 1);
        } else {
            createCommentVote(id, liked);
            setVote(like);
            setVoteCount(voteSum + 1);
        };
        
    };

    const clickOnDislike = () => {
        if(vote === dislike) {
            deleteCommentVote(id);
            setVote(noLikes);
            setVoteCount(voteSum);
        } else if (vote === like) {
            changeCommentVote(id, unliked);
            setVote(dislike);
            setVoteCount(voteSum - 1);
        } else {
            createCommentVote(id, unliked);
            setVote(dislike);
            setVoteCount(voteSum - 1);
        };
    };

    const switchButtonLike = () => {
        switch (vote) {
            case 1:
                return (
                    <button onClick={() => clickOnLike()}>
                        <img src={clickedLike} alt="Ícone de curtido clicado"/>
                    </button>
                );
            default:
                return (
                    <button onClick={() => clickOnLike()}>
                        <img src={unClickedLike} alt="Ícone de curtido não clicado"/>
                    </button>
                );
        };
    };

    const switchButtonDislike = () => {
        switch (vote) {
            case -1:
                return (
                    <button onClick={() => clickOnDislike()}>
                        <img src={clickedDisLike} alt="Ícone de descurtido clicado"/>
                    </button>
                );
            default:
                return (
                    <button onClick={() => clickOnDislike()}>
                        <img src={unClickedDisLike} alt="Ícone de descurtido não clicado"/>
                    </button>
                );
        };
    };

    // console.log("Estado Inicial:", "userVote", userVote, "voteSum", voteSum);
    // console.log("Mudança de estado:", "vote", vote, "voteCount", voteCount);

    return (
        <div>
            {switchButtonLike()}
            <span>{voteCount}</span>
            {switchButtonDislike()}
        </div>
    );
};

export default VotesComments;