import { Request, Response } from "express";
import { User } from "../Types/User";
import { UserBusiness } from "../Business/UserBusiness";

export class UserController {
    constructor(private userBusiness: UserBusiness){}

    public async getUser (
        req: Request,
        res: Response
    ): Promise<void> {
        try {
            const id = req.params.id as string;
            
            const user: User = await this.userBusiness.getUserById(id);

            res.status(200).send({user});
        } catch (error: any) {
            res.status(400).send(error.message);
        };
    };
};