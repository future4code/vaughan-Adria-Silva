import { UserDatabase } from "../Data/UserData";
import { IdGenerator } from "../Services/idGenerator";
import { HashManager } from "../Services/HashMamager";
import { Authenticator } from "../Services/Authenticator";
import { CustomError } from "../Errors/CustomError"

export class UserBusiness {

    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private tokenGenerator: Authenticator,
        private hashGenerator: HashManager
     ) { }

    public async getUserById(id: string) {
        const user = await this.userDatabase.selectUserById(id);
    
        if (!user) {
          throw new CustomError(404, "User not found");
        }
    
        return {
          id: user[0].id,
          name: user[0].name,
          email: user[0].email,
          password: user[0].password,
          role: user[0].role,
        };
    };
};