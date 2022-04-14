import { User } from "../types";
import { connection } from "./connection";


const showError = (error: any): void => {
    console.log(error.sqlMessage || error.message);
};

export const createTable = async (): Promise<void>=> {
    await connection.raw(`
        CREATE TABLE IF NOT EXISTS labecommerce_users (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL
        );   
    `)
    .then(() => {console.log("Tabela Criada")})
    .catch(showError);
};

export const insertUser = async (
    id: string,
    name: string,
    email: string,
    password: string
): Promise<void> => {
    await connection("labecommerce_users")
    .insert({
        id,
        name,
        email,
        password
    })
    .then(() => {console.log("Usuário Cadastrado")})
    .catch(showError);
};

export const allUsers = async (): Promise<User[]> => {
    const result = await connection("labecommerce_users")
    .then((res) => res)
    .catch(showError);

    return result as User[];
}