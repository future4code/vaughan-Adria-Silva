import { connection } from "./connection"

const printError = (error: any): void => { 
    console.log(error.sqlMessage || error.message);
};

const createTables = (): void => {
    connection.raw(`
        CREATE TABLE IF NOT EXISTS labesystem_class(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            module INT DEFAULT 0
        );

        CREATE TABLE IF NOT EXISTS labesystem_student(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            birth_date DATE NOT NULL,
            class_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (class_id) REFERENCES labesystem_class(id)
        );

        CREATE TABLE IF NOT EXISTS labesystem_hobby(
            id VARCHAR(255) PRIMARY KEY,
            hobby VARCHAR(255) UNIQUE NOT NULL
        );

        CREATE TABLE IF NOT EXISTS labesystem_student_with_hobby(
            id VARCHAR(255) PRIMARY KEY,
            student_id VARCHAR(255) NOT NULL,
            hobby_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (student_id) REFERENCES labesystem_student(id),
            FOREIGN KEY (hobby_id) REFERENCES labesystem_hobby(id)
        );

        CREATE TABLE IF NOT EXISTS labesystem_teacher(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            birth_date DATE NOT NULL,
            class_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (class_id) REFERENCES labesystem_class(id)
        );

        CREATE TABLE IF NOT EXISTS labesystem_specialty(
            id VARCHAR(255) PRIMARY KEY,
            specialty VARCHAR(255) UNIQUE NOT NULL
        );

        CREATE TABLE IF NOT EXISTS labesystem_teacher_with_specialty(
            id VARCHAR(255) PRIMARY KEY,
            teacher_id VARCHAR(255) NOT NULL,
            specialty_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (teacher_id) REFERENCES labesystem_teacher(id),
            FOREIGN KEY (specialty_id) REFERENCES labesystem_specialty(id)
        );
    `)
    .then(()=> console.log("Created tables"))
    .catch(printError);
};

createTables();