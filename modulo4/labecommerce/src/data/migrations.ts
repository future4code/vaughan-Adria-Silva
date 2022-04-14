import { Product, User } from "../types";
import { connection } from "./connection";


const showError = (error: any): void => {
    console.log(error.sqlMessage || error.message);
};

export const createTableUsers = async (): Promise<void>=> {
    await connection.raw(`
        CREATE TABLE IF NOT EXISTS labecommerce_users (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL
        );   
    `)
    .then(() => {console.log("Tabela de Usuários Criada")})
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
};

export const createTableProducts = async (): Promise<void>=> {
    await connection.raw(`
        CREATE TABLE IF NOT EXISTS labecommerce_products (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price FLOAT NOT NULL,
            image_url VARCHAR(255) NOT NULL
        );   
    `)
    .then(() => {console.log("Tabela de Produtos Criada")})
    .catch(showError);
};

export const insertProduct = async (
    id: string,
    name: string,
    price: number,
    image_url: string
): Promise<void> => {
    await connection("labecommerce_products")
    .insert({
        id,
        name,
        price,
        image_url
    })
    .then(() => {console.log("Produto Cadastrado")})
    .catch(showError);
};

export const allProducts = async (): Promise<Product[]> => {
    const result = await connection("labecommerce_products")
    .then((res) => res)
    .catch(showError);

    return result as Product[];
};