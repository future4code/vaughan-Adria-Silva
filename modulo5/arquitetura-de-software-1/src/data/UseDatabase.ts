import { User } from "../types/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public async insertUser(user: User): Promise<void> {
        await this.connection.insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role
        }).into("User_Arq");
    };

    public async selectUserByEmail(email: string): Promise<User> {
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

    public async selectAllUsers(): Promise<User[]> {
        try {
            const result = await this.connection("User_Arq")
                .select("*");

            const formatedResult = result.map((user: User) => {
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    role: user.role
                };
            });

            return formatedResult;
        } catch (error: any) {
            throw new Error(error.slqMessage || error.message);
        };
    };

    public async selectUserById(id: string): Promise<User[]> {
        try {
            const result = await this.connection("User_Arq")
                .select("*")
                .where({ id });
            
            return result;
            
        } catch (error: any) {
            throw new Error(error.slqMessage || error.message);
        };
    };

    public async deleteUserById(id: string): Promise<void> {
        try {
            await this.connection("User_Arq")
                .where({ id })
                .del();

        } catch (error: any) {
            throw new Error(error.slqMessage || error.message);
        };
    };
};
