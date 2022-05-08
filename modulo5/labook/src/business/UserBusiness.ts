import { TablesCreator } from "../data/migrations";
import { UserData } from "../data/UserData";
import { LoginInputDTO, SignupInputDTO } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { User } from "../types/user";


export class UserBusiness {

    constructor(
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator,
        private createTable: TablesCreator,
        private userDB: UserData
    ){}

    public async signUp(
        input: SignupInputDTO
    ): Promise<string> {
        const { name, email, password } = input;
        if (!name || !email || !password) {
            const message = '"name", "email" and "password" must be provided'
            throw new Error(message)
        };
        if (!email.includes("@")) {
            const message = "Invalid email"
            throw new Error(message);
        };

        await this.createTable.createTables();

        const registeredEmail: User[] = await this.userDB.findUserByEmail(email);
        if (registeredEmail.length) {
            const message = "E-mail already registered"
            throw new Error(message);
        };

        const id = this.idGenerator.generate();
        const cypherPassword = await this.hashManager.createHash(password);

        const newUser: User = {
            id,
            name,
            email,
            password: cypherPassword
        }

        await this.userDB.insertNewUser(newUser);
        const token: string = this.authenticator.generateToken({ id });

        return token;
    };

    public async login(
        input: LoginInputDTO
    ): Promise<string> {
        const { email, password } = input;

        if ( !email || !password) {
            const message = '"email" and "password" must be provided'
            throw new Error(message)
        };
        if (!email.includes("@")) {
            const message = "Invalid email"
            throw new Error(message);
        };

        const registeredUser: User[] = await this.userDB.findUserByEmail(email);
        if (!registeredUser.length) {
            const message = "Email is not registered" // res.statusCode = 401
            throw new Error(message);
        };

        const user: User = {
            id: registeredUser[0].id,
            name: registeredUser[0].name,
            email: registeredUser[0].email,
            password: registeredUser[0].password
        };

        const passwordIsCorrect: boolean = await this.hashManager.compareHash(password, user.password)
        if (!passwordIsCorrect) {
            const message = "Email is not registered" // res.statusCode = 401
            throw new Error(message);
        };

        const token: string = this.authenticator.generateToken({
            id: user.id
        });

        return token;
    };
};