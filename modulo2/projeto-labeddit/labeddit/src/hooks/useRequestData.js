import axios from "axios";
import { useEffect, useState } from "react";
import { completeHeaders } from "../constants/headers.js"

const useRequestData = (inicialState, url) => {
    const [data, setData] = useState(inicialState);
    const [reloadList, setReloadList] = useState(false);

    useEffect(() => {
        request();
    }, [reloadList]);

    const request = async () => {
        try {
            const response = await axios.get(url, completeHeaders());
            setData(response.data);
        } catch (error) {
            // alert("Desculpe-nos! Ocorreu um erro ao carregar o feed de posts. Por favor, tente novamente mais tarde.");
        };
    };

    const listReoadController = () => setReloadList(!reloadList);
    
    return [data, listReoadController];
};

export default useRequestData;