import { User } from "../types/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public async insertUser(user: User): Promise<void>{
        await this.connection.insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role
        }).into("User_Arq");
    };

    public async selectUserByEmail (email: string): Promise<User> {
        try {
            const result = await this.connection("User_Arq")
                .select("*")
                .where({ email });
            
            return {
                id: result[0].id,
                name: result[0].name,
                email: result[0].email,
                password: result[0].password,
                role: result[0].role
            };
        } catch (error: any) {
            throw new Error(error.slqMessage || error.message);
        };
    };
};
