// import express, {Express} from 'express';
// import cors from 'cors';
// import { AddressInfo } from "net";
// const app: Express = express();

// app.use(express.json());
// app.use(cors());



// const server = app.listen(process.env.PORT || 3003, () => {
//     if (server) {
//        const address = server.address() as AddressInfo;
//        console.log(`Server is running in http://localhost:${address.port}`);
//     } else {
//        console.error(`Failure upon starting server.`);
//     };
// });

import axios from "axios"
import { baseURL } from "./baseURL"

// Exercício 1

// a) Endpoint get - https://labenews.herokuapp.com/subscribers retorna todos
//os inscritos.

// b) Toda função assíncrona retorna uma Promisse que espera algum tipo de
//valor. Assim, a tipagem do retorno da função é Promise<any[]>.

// c)

async function getSubscribers (): Promise<any[]> {
   const response = await axios.get(`${baseURL}/subscribers`);
   return response.data;
};

