import { app } from "./app";
import { activeClasses } from "./endpoints/activeClasses";
import { createClass } from "./endpoints/createClass";
import { createStudent } from "./endpoints/createStudent";
import { studentsByNameHobby } from "./endpoints/studentsByNameHobby";
import { updateClassModule } from "./endpoints/updateClassModule";
import { updateStudentClass } from "./endpoints/updateStudentClass";


app.post("/class", createClass); 
app.get("/class", activeClasses);
app.patch("/class", updateClassModule);

app.post("/student", createStudent);
app.get("/student", studentsByNameHobby);
app.patch("/student", updateStudentClass);