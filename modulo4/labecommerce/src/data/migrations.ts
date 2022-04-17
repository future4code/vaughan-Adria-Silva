import { Product, User, UserAndPurchases } from "../types";
import { connection } from "./connection";


const showError = (error: any): void => {
    console.log(error.sqlMessage || error.message);
};

export const createTableUsers = async (): Promise<void> => {
    await connection.raw(`
        CREATE TABLE IF NOT EXISTS labecommerce_users (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL
        );   
    `)
        .then(() => { console.log("Tabela de Usuários Criada") })
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
        .then(() => { console.log("Usuário Cadastrado") })
        .catch(showError);
};

export const allUsers = async (): Promise<User[]> => {
    const result = await connection("labecommerce_users")
        .then((res) => res)
        .catch(showError);

    return result as User[];
};

export const createTableProducts = async (): Promise<void> => {
    await connection.raw(`
        CREATE TABLE IF NOT EXISTS labecommerce_products (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price FLOAT NOT NULL,
            image_url VARCHAR(255) NOT NULL
        );   
    `)
        .then(() => { console.log("Tabela de Produtos Criada") })
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
        .then(() => { console.log("Produto Cadastrado") })
        .catch(showError);
};

export const allProducts = async (order?: string, search?: string): Promise<Product[]> => {
    if (order && search) {
        const result = await connection("labecommerce_products")
            .whereLike("name", `%${search}%`)
            .orderBy("name", `${order}`)
            .then((res) => res)
            .catch(showError);

        return result as Product[];
    } else if (order) {
        const result = await connection("labecommerce_products")
            .orderBy("name", `${order}`)
            .then((res) => res)
            .catch(showError);

        return result as Product[];
    } else if (search) {
        const result = await connection("labecommerce_products")
            .whereLike("name", `%${search}%`)
            .then((res) => res)
            .catch(showError);

        return result as Product[];
    } else {
        const result = await connection("labecommerce_products")
            .then((res) => res)
            .catch(showError);

        return result as Product[];
    }
};

//////////

export const findUser = async (id: string): Promise<User[]> => {
    const result = await connection("labecommerce_users")
        .where({ id })
        .then((res) => res)
        .catch(showError);

    return result as User[];
};

export const findProduct = async (id: string): Promise<Product[]> => {
    const result = await connection("labecommerce_products")
        .where({ id })
        .then((res) => res)
        .catch(showError);

    return result as Product[];
};

export const createTablePurchases = async (): Promise<void> => {
    await connection.raw(`
        CREATE TABLE IF NOT EXISTS labecommerce_purchases (
            id VARCHAR(255) PRIMARY KEY,
            user_id VARCHAR(255) NOT NULL,
            product_id VARCHAR(255) NOT NULL,
            quantity INT NOT NULL,
            total_price FLOAT NOT NULL,
            FOREIGN KEY (user_id) REFERENCES labecommerce_users(id),
            FOREIGN KEY (product_id) REFERENCES labecommerce_products(id)
        );   
    `)
        .then(() => { console.log("Tabela de Produtos Criada") })
        .catch(showError);
};

export const insertPurchase = async (
    id: string,
    user_id: string,
    product_id: string,
    quantity: number,
    total_price: number
): Promise<void> => {
    await connection("labecommerce_purchases")
        .insert({
            id,
            user_id,
            product_id,
            quantity,
            total_price
        })
        .then(() => { console.log("Compra Cadastrada") })
        .catch(showError);
};

export const getPurchasesByUserId = async (user_id: string) => {
    const result = await connection("labecommerce_purchases")
        .select(
            "labecommerce_products.*",
            "labecommerce_purchases.quantity",
            "labecommerce_purchases.total_price"
        ).innerJoin(
            "labecommerce_products",
            "labecommerce_purchases.product_id",
            "=",
            "labecommerce_products.id")
        .where({ "labecommerce_purchases.user_id": user_id })
        .then((res) => res)
        .catch(showError);

    return result;
};

/////////// 

export const allUsersAndPurchases = async (): Promise<UserAndPurchases[]> => {
    const result = await connection("labecommerce_users")
        .select(
            "labecommerce_users.id as user_id",
            "labecommerce_users.name as user_name",
            "labecommerce_users.email",
            "labecommerce_users.password",
            "labecommerce_products.id as product_id",
            "labecommerce_products.name as product_name",
            "labecommerce_products.image_url",
            "labecommerce_products.price",
            "labecommerce_purchases.quantity",
            "labecommerce_purchases.total_price"
        ).leftJoin(
            "labecommerce_purchases",
            "labecommerce_purchases.user_id",
            "=",
            "labecommerce_users.id"
        ).leftJoin(
            "labecommerce_products",
            "labecommerce_purchases.product_id",
            "=",
            "labecommerce_products.id"
        ).orderBy("labecommerce_users.id", "asc")
        .then((res) => res)
        .catch(showError);

    return result as UserAndPurchases[];
};