import { User } from "../Types/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
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
};