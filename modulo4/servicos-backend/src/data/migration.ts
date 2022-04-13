import { connection } from "./connection";


const showError = (error: any): void => {
    console.log(error.sqlMessage || error.message);
};

export const createTable = async (): Promise<void>=> {
    await connection.raw(`
        CREATE TABLE IF NOT EXISTS address (
            id VARCHAR(255) PRIMARY KEY,
            CEP INT NOT NULL,
            numero INT NOT NULL,
            complemento VARCHAR(255),
            bairro VARCHAR(255) NOT NULL,
            cidade VARCHAR(255) NOT NULL,
            estado VARCHAR(255) NOT NULL
        );   
    `)
    .then(() => {console.log("Tabela Criada")})
    .catch(showError);
};