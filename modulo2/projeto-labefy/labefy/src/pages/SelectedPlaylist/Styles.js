import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: auto;

    @media(max-width: 375px) {
        width: 85%;
    }
`

export const Playlist = styled.div`
    align-self: flex-start;
    margin-left: 16px;

    h3 {
        margin: 0;
    }    
    p {
        margin: 4px 0;
    }
`

export const AllSongsContainer = styled.div`
    margin-top: 16px;
    width: 100%;
`

export const SongContainer = styled.div`
    border: thin solid black;
    border-radius: 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px;
`

export const Song = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    iframe {
        margin: 8px;
    
    }
`

export const Delete = styled.button`
    align-self: flex-end;
    margin: 8px;
    cursor: pointer;
    border-radius: 4px;
    img{
        width: 18px;
        height: 18px;
    }
`


export const AddSong = styled.fieldset`
    margin: 16px;
    align-self: center;
    border: thin solid black;
    border-radius: 12px;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
        width: 350px;
        margin: 4px;
        font-size: 16px;
    }

    @media(max-width: 375px) {
        input {
            width: 300px;
        }
    }
`