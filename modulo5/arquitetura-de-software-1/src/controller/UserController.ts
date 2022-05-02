import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

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
};