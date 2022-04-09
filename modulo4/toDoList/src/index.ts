import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import {connection} from './connection';

const app: Express = express();

app.use(express.json());
app.use(cors());

// FUNÇÔES 
const createUser = async (id: number, name: string, nickname: string, email: string): Promise<void> => {
   await connection("ToDoListUser")
      .insert({
         id,
         name,
         nickname,
         email
      });
};

// ENDPOINTS
app.post("/user", (req: Request, res: Response) => {
   let statusCode: number = 400;
   try {
      const { name, nickname, email } = req.body;

      if (!name || !nickname || !email) {
         statusCode = 422;
         throw new Error("Informações para cadastro estão incompletas!");
      };

      const id = Date.now();
      createUser(id, name, nickname, email);

      const newUserInfo = {
         id,
         name,
         nickname,
         email
      };

      res.status(201).send({newUser: newUserInfo});
   } catch (error: any) {
      res.status(statusCode).send(error.sqlMessage || error.message); 
   };
});

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   };
});
