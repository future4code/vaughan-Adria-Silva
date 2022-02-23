import axios from "axios";
import { useEffect, useState } from "react";
import { contentType } from "../constants/headers.js"

const useRequestData = (inicialState, url) => {
    const [data, setData] = useState(inicialState);

    useEffect(() => {
        request();
    }, [url])

    const request = async () => {
        const headersConfig = {
            headers: {
                contentType,
                Authorization: localStorage.getItem("token")
            }
        };

        try {
            const response = await axios.get(url, headersConfig);
            setData(response.data);
        } catch (error) {
            alert("Desculpe-nos! Ocorreu um erro ao carregar o feed de posts. Por favor, tente novamente mais tarde.")
        };
    };
    
    return data;
};

export default useRequestData;