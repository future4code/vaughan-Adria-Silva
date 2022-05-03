import { UserDatabase } from "../data/UseDatabase";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { User, USER_ROLES } from "../types/user";

const userDB = new UserDatabase();
const generateId = new IdGenerator();
const hashPassword = new HashManager();
const authenticator = new Authenticator()

export class UserBusiness {
    public async signUp(
        name: string, email: string, password: string, role: USER_ROLES
    ): Promise<string> {
        try {
            if (!name || !email || !password || !role) {
                throw new Error("Preencha todos os campos para se inscrever");
            };

            if (!email.includes("@")) {
                throw new Error("Email inválido");
            };

            if (password.length < 6) {
                throw new Error("Senha deve possuir pelo menos 6 caracteres");
            };

            const id = generateId.generate();
            const hash = await hashPassword.createHash(password);

            const newUser: User = {
                id,
                name,
                email,
                password: hash,
                role
            };

            await userDB.insertUser(newUser);

            const token = authenticator.generateToken({ id, role });
            return token;

        } catch (error: any) {
            throw new Error(error.message || "Erro ao se inscrever");
        }
    };

    public async login(email: string, password: string): Promise<string> {
        try {
            if (!email || !password) {
                throw new Error("Preencha todos os campos para se inscrever");
            };

            if (!email.includes("@") || password.length < 6) {
                throw new Error("Email e/ou senha inválidos");
            };

            const user: User[] = await userDB.selectUserByEmail(email);
            if (!user.length) {
                throw new Error("Usuário não cadastrado");
            };

            const hashCompare: boolean = await hashPassword.compareHash(password, user[0].password);
            if (!hashCompare) {
                throw new Error("Senha inválida");
            };

            const accessToken = authenticator.generateToken({
                id: user[0].id,
                role: user[0].role
            });

            return accessToken;

        } catch (error: any) {
            throw new Error(error.message || "Erro ao logar");
        };
    };

    public async getAllUsers(token: string) {
        try {
            const tokenData = authenticator.getTokenData(token);

            if (!tokenData || tokenData.role !== 'ADMIN') {
                throw new Error("Não autorizado. É necessário estar logado em uma conta ADMIN.");
            };

            const usersList: User[] = await userDB.selectAllUsers();

            return usersList;

        } catch (error: any) {
            throw new Error(error.message || "Não autorizado");
        };
    };

    public async deleteUser(token: string, id: string) {
        try {
            const tokenData = authenticator.getTokenData(token);

            if (!tokenData || tokenData.role !== 'ADMIN') {
                throw new Error("Não autorizado. É necessário estar logado em uma conta ADMIN.");
            };

            const userToDelete: User[] = await userDB.selectUserById(id);

            if (!userToDelete.length) {
                throw new Error("Usuário informado não existe em nosso banco de dados");
            };

            await userDB.deleteUserById(id);

        } catch (error: any) {
            throw new Error(error.message || "Não autorizado");
        };
    };
};