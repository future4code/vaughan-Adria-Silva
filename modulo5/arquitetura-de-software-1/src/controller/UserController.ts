import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { User } from "../types/user";

const userBusiness = new UserBusiness();

export class UserController {
    public async signUp (
        req: Request,
        res: Response
    ): Promise<void> {
        try {
            const { name, email, password, role } = req.body;

            const token = await userBusiness.signUp(name, email, password, role);

            res.status(201).send({token});
        } catch (error: any) {
            res.status(400).send(error.message);
        };
    };

    public async login (
        req: Request,
        res: Response
    ): Promise<void> {
        try {
            const { email, password } = req.body;

            const token = await userBusiness.login(email, password);

            res.status(200).send({token});
        } catch (error: any) {
            res.status(400).send(error.message);
        };
    };

    public async getUsers (
        req: Request,
        res: Response
    ): Promise<void> {
        try {
            const token = req.headers.authorization as string;
            
            const allUsers: User[] = await userBusiness.getAllUsers(token);

            res.status(200).send({usersList: allUsers});
        } catch (error: any) {
            res.status(400).send(error.message);
        };
    };
};