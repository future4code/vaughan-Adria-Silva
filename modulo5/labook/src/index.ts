import { UserBusiness } from "./business/UserBusiness";
import { app } from "./controller/app";
import { UserController } from "./controller/UserController";
import { TablesCreator } from "./data/migrations";
import { UserData } from "./data/UserData";
import { Authenticator } from "./services/Authenticator";
import { HashManager } from "./services/HashManager";
import { IdGenerator } from "./services/IdGenerator";


const userBusiness = new UserBusiness(
    new IdGenerator(),
    new HashManager(),
    new Authenticator(),
    new TablesCreator(),
    new UserData()
);

const userController = new UserController(
    userBusiness
);

app.post("/signup", (req, res) => userController.signUp(req, res));
app.post("/login", (req, res) => userController.login(req, res));