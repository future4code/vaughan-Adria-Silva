import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const useProtectedPage = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);
};

export default useProtectedPage;