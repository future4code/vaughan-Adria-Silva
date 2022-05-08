import { User } from "../types/user";
import { BaseDatabase } from "./BaseDatabase";


export class UserData extends BaseDatabase {

    protected tableName = 'labook_users';

    public async insertNewUser (user: User) {
        try {
            await BaseDatabase.connection(this.tableName)
                .insert(user);
        } catch (error: any) {
            throw new Error(error.message || `SQL:${error.sqlMessage}` );
        }
    };

    public async findUserByEmail (email: string) {
        try {
            const result: User[] = await BaseDatabase
                .connection(this.tableName)
                .select("*")
                .where({ email })

            return result
        } catch (error: any) {
            throw new Error(error.message || `SQL:${error.sqlMessage}` )
        };
    };
};