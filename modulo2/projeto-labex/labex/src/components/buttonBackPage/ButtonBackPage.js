import { useNavigate } from "react-router-dom";
import { Button } from "./style";

export default function ButtonBackPage () {
    const navigate = useNavigate();
    return <Button onClick={() => navigate(-1)}>Voltar</Button>;
};