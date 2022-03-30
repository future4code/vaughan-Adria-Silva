import express from 'express';
import cors from 'cors'

const app = express();

app.use(express.json);
app.use(cors());

// Endpoints

app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});