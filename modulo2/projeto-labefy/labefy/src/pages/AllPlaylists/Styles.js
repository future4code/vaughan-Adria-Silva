import styled from "styled-components"

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

export const CreatePlaylist = styled.fieldset`
    margin: 16px;
    align-self: center;
    border: thin solid black;
    border-radius: 12px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
        margin-right: 4px;
        font-size: 16px;
    }
`

export const AllPlaylistisContainer = styled.div`
    margin-top: 16px;
    width: 100%;
`

export const PlaylistContainer = styled.div`
    border: thin solid black;
    border-radius: 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px;
`

export const GoToPlaylistContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
        margin-left: 8px;
    }
    
    h3 {
        margin-left: 16px;
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