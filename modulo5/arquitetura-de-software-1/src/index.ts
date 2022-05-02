import { app } from "./controller/app";
import { UserController } from "./controller/UserController";


const userController = new UserController()

app.post("/signup", userController.signUp)
app.post("/login", userController.login)