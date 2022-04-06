import express, {Express, Request, Response} from 'express';
import cors from 'cors';

const app: Express = express();

app.use(express.json());
app.use(cors());
