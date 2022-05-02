import { UserDatabase } from "../data/UseDatabase";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { User, USER_ROLES } from "../types/user";

const userDB = new UserDatabase();
const generateId = new IdGenerator();
const hashingPassword = new HashManager();
const authenticator = new Authenticator()

export class UserBusiness {
    public async signUp (
        name: string, email: string, password: string, role: USER_ROLES
    ) {
        try {
            if (
                !name || !email || !password || !role
            ) {
                throw new Error ("Preencha todos os campos para se inscrever");
            };

            if (!email.includes("@")) {
                throw new Error("Email inválido");
            };

            if(password.length < 6){
                throw new Error("Senha deve possuir pelo menos 6 caracteres");
            };

            const id = generateId.generate();
            const hash = await hashingPassword.createHash(password);

            const newUser: User = {
                id,
                name,
                email, 
                password: hash,
                role
            };

            await userDB.insertUser(newUser);

            const token = authenticator.generateToken({id, role});
            return token;
            
        } catch (error: any) {
            throw new Error (error.message || "Erro ao se inscrever")
        }
    };
};