import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { connection } from './connection';
import { dateFormatValidate, pastDate, responseFormatDate, sqlFormatDate } from './dateValidation';
import { formatResponseTasks } from './formatResTasks';

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

const getUserById = async (id: string): Promise<any> => {
   const user = await connection("ToDoListUser")
      .select("id", "name")
      .where({ id });

   return user[0];
};

const editUser = async (id: string, name: string, nickname: string): Promise<void> => {
   await connection("ToDoListUser")
      .update({
         name,
         nickname
      }).where({ id });
};

const createTask = async (id: number, title: string, description: string, limitDate: string, creatorUserId: string): Promise<void> => {
   await connection("ToDoListTask")
   .insert({
      id,
      title,
      description,
      limit_date: limitDate,
      creator_user_id: creatorUserId
   });
};

const getTaskById = async (id: string): Promise<any> => {
   const task = await connection("ToDoListTask")
      .select("id", "title")
      .where({ id });
   return task[0];
};

const getInfoTask = async (id: string): Promise<any> => {
   const allInfoTask = await connection("ToDoListTask")
   .innerJoin("ToDoListUser", "ToDoListTask.creator_user_id", "=","ToDoListUser.id ")
   .select("ToDoListTask.*", "ToDoListUser.nickname")
   .where({"ToDoListTask.id": id});

   return allInfoTask[0];
};

const getAllUsers = async (): Promise<any> => {
   const allUsers = await connection("ToDoListUser")
   .select("id", "nickname");

   return allUsers;
};

const getUserbyNickname = async (query: string): Promise<any> => {
   const user = await connection("ToDoListUser")
   .select("id", "nickname")
   .whereLike("nickname", `%${query}%`);

   return user;
};

// ENDPOINTS
// Criar Usuário
app.post("/user", async (req: Request, res: Response) => {
   let statusCode: number = 400;
   try {
      const { name, nickname, email } = req.body;

      if (!name || !nickname || !email) {
         statusCode = 422;
         throw new Error("Informações para cadastro estão incompletas!");
      };

      const id = Date.now();
      await createUser(id, name, nickname, email);

      const newUserInfo = {
         id,
         name,
         nickname,
         email
      };

      res.status(201).send({ newUser: newUserInfo });
   } catch (error: any) {
      res.status(statusCode).send(error.sqlMessage || error.message);
   };
});

// Pesquisar usuário
app.get("/user/", async (req: Request, res: Response) => {
   let statusCode: number = 400;
   try {
      const query: string = req.query.query as string;

      if (!query) {
         statusCode = 422;
         throw new Error("É necessário enviar um termo de busca!");
      };

      const foundUsers = await getUserbyNickname(query);

      res.status(200).send({users: foundUsers});
   } catch (error: any) {
      res.status(statusCode).send(error.sqlMessage || error.message);
   };
});

//Pegar usuário pelo id e Pegar todos os usuários
app.get("/user/:id", async (req: Request, res: Response) => {
   let statusCode: number = 400;
   try {
      const id = req.params.id;

      if (id === "all") {
         const allUsers = await getAllUsers();
         res.status(200).send({users: allUsers});
      };

      const user = await getUserById(id);
      if (!user) {
         statusCode = 404;
         throw new Error("Id inválido ou não cadastrado!");
      };

      res.status(200).send(user);
   } catch (error: any) {
      res.status(statusCode).send(error.sqlMessage || error.message);
   }
});

// Editar usuário
app.put("/user/edit/:id", async (req: Request, res: Response) => {
   let statusCode: number = 400;
   try {
      const id = req.params.id;
      const { name, nickname } = req.body;

      const hasUser = await getUserById(id);
      if (!hasUser) {
         statusCode = 404;
         throw new Error("Id inválido ou não cadastrado!");
      };

      if (!name || !nickname) {
         statusCode = 422;
         throw new Error("Informações incompletas!");
      };

      await editUser(id, name, nickname);

      res.status(200).send("Nome e apelido atualizado com sucesso!");
   } catch (error: any) {
      res.status(statusCode).send(error.sqlMessage || error.message);
   };
});

// Criar tarefa
app.post("/task", async (req: Request, res: Response) => {
   let statusCode: number = 400;
   try {
      const { title, description, limitDate, creatorUserId } = req.body;

      if (!title || !description || !limitDate || !creatorUserId) {
         statusCode = 422;
         throw new Error("Informações incompletas!");
      };

      const hasUser = await getUserById(creatorUserId);
      if (!hasUser) {
         statusCode = 404;
         throw new Error("Id inválido ou não cadastrado!");
      };

      dateFormatValidate(limitDate);
      const isPast = pastDate(limitDate);
      if (isPast > 0) {
         statusCode = 422;
         throw new Error("A data informada do pagamento já passou");
      };

      const formatedSQLDate = sqlFormatDate(limitDate);

      const id: number = Date.now();
      await createTask(id, title, description, formatedSQLDate, creatorUserId);

      res.status(201).send("Nova tarefa criada com sucesso");
   } catch (error: any) {
      if (
         error.message === "A data não está no formato solicitado: DD / MM / AAAA" ||
         error.message === "Algum(s) caractere(s) do dia, mês e / ou ano da data não é (são) não numérico(s)" ||
         error.message === "Data inválida"
      ) {
         res.status(422).send({ message: error.message });
      };
      res.status(statusCode).send(error.sqlMessage || error.message);
   };
});

// Pegar tarefas criadas por um usuário
const getAllTaskByCreatorId = async (creatorUserId: string): Promise<any> => {
   const allTasksByCreatorId = await connection("ToDoListTask")
   .innerJoin("ToDoListUser", "ToDoListTask.creator_user_id", "=", "ToDoListUser.id")
   .select("ToDoListTask.*", "ToDoListUser.nickname")
   .where({"ToDoListTask.creator_user_id": creatorUserId});

   return allTasksByCreatorId;
};

app.get("/task/", async (req: Request, res: Response)=>{
   let statusCode:number = 400;
   try {
      const creatorUserId = req.query.creatorUserId as string;

      const hasUser = await getUserById(creatorUserId);
      if (!hasUser) {
         statusCode = 404;
         throw new Error("Id inválido ou não cadastrado!");
      };

      const allTasksByCreatorId = await getAllTaskByCreatorId(creatorUserId);
      const formatedAllTasksByCreatorId = formatResponseTasks(allTasksByCreatorId);
  
      res.status(200).send(formatedAllTasksByCreatorId);
   } catch (error: any) {
      res.status(statusCode).send(error.sqlMessage || error.message);
   };
});

//Pegar tarefa pelo id
app.get("/task/:id", async (req: Request, res: Response)=>{
   let statusCode:number = 400;
   try {
      const id: string = req.params.id;
      
      const hasTask = await getTaskById(id);
      if (!hasTask) {
         statusCode = 404;
         throw new Error("Id inválido ou não cadastrado!");
      };

      const infoTask = await getInfoTask(id);
      const taskArr = [infoTask];
      const formatedInfoTask = formatResponseTasks(taskArr);

      res.status(200).send(formatedInfoTask[0]);
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
