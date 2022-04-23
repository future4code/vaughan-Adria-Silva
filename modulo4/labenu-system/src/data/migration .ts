import { connection } from "./connection";
import classes from "./initialData/class.json";
import students from "./initialData/student.json";
import hobbies from "./initialData/hobby.json";
import studentsHobbies from "./initialData/studentsHobby.json";
import teachers from "./initialData/teacher.json";
import specialties from "./initialData/specialty.json";
import teachersSpecialties from "./initialData/teachersSpecialty.json";


const printError = (error: any): void => { 
    console.log(error.sqlMessage || error.message);
};

const createTables = (): Promise<void> => connection
    .raw(`
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

const insertClass = () => connection("labesystem_class")
    .insert(classes)
    .then(() => console.log("labesystem_class populated"))
    .catch(printError);

const insertStudent = () => connection("labesystem_student")
    .insert(students)
    .then(() => console.log("labesystem_student populated"))
    .catch(printError);

const insertHobby = () => connection("labesystem_hobby")
    .insert(hobbies)
    .then(() => console.log("labesystem_hobby populated"))
    .catch(printError);

const insertStudentsHobby = () => connection("labesystem_student_with_hobby")
    .insert(studentsHobbies)
    .then(() => console.log("labesystem_student_with_hobby populated"))
    .catch(printError);

const insertTeacher = () => connection("labesystem_teacher")
    .insert(teachers)
    .then(() => console.log("labesystem_teacher populated"))
    .catch(printError);

const insertSpecialty = () => connection("labesystem_specialty")
    .insert(specialties)
    .then(() => console.log("labesystem_specialty populated"))
    .catch(printError);

const insertTeachersSpecialty = () => connection("labesystem_teacher_with_specialty")
    .insert(teachersSpecialties)
    .then(() => console.log("labesystem_teacher_with_specialty populated"))
    .catch(printError);


createTables()
    .then(insertClass)
    .then(insertStudent)
    .then(insertHobby)
    .then(insertStudentsHobby)
    .then(insertTeacher)
    .then(insertSpecialty)
    .then(insertTeachersSpecialty);