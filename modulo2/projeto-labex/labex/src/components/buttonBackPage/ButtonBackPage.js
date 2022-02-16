import { useNavigate } from "react-router-dom";

export default function ButtonBackPage () {
    const navigate = useNavigate();
    return <button onClick={() => navigate(-1)}>Voltar</button>;
};