import express from "express";
import { UserBusiness } from "../Business/UserBusiness";
import { UserController } from "../Controller/UserController";
import { UserDatabase } from "../Data/UserData";
import { Authenticator } from "../Services/Authenticator";
import { HashManager } from "../Services/HashMamager";
import { IdGenerator } from "../Services/idGenerator";

export const userRouter = express.Router();

const userBusiness = new UserBusiness(
    new UserDatabase(),
    new IdGenerator(),
    new Authenticator(),
    new HashManager()
);
const userController = new UserController(userBusiness);

userRouter.get("/users/profile/:id", userController.getUser);
