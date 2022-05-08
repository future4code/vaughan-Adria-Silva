import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { SignupInputDTO } from "../model/User";


export class UserController {

    constructor(
        private userBusiness: UserBusiness
    ){};

    public async signUp (
        req: Request,
        res: Response
    ): Promise<void> {
        try {
            const { name, email, password} = req.body;

            const input: SignupInputDTO = {
                name,
                email,
                password
            };

            const token: string = await this.userBusiness.signUp(input);
            
            res.status(201).send({token});
        } catch (error: any) {
            if (error.message.includes("SQL")) {
                res.statusCode = 500;
                res.send("internal database problem");
            };

            switch (error.message) {
                case '"name", "email" and "password" must be provided':
                    res.statusCode = 406;
                    res.send(error.message);
                    break;
                case "e-mail already registered":
                    res.statusCode = 409;
                    res.send(error.message);
                    break;
                default:
                    res.statusCode = 400;
                    res.send(error.message);
                    break;
            };

        };
    };
}