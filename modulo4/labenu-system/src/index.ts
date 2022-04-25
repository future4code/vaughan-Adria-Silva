import { app } from "./app";
import { activeClasses } from "./endpoints/activeClasses";
import { createClass } from "./endpoints/createClass";
import { createStudent } from "./endpoints/createStudent";
import { createTeacher } from "./endpoints/createTeacher";
import { studentsByNameHobby } from "./endpoints/studentsByNameHobby";
import { teacherByNameSpecilty } from "./endpoints/teacherByNameSpecilty";
import { updateClassModule } from "./endpoints/updateClassModule";
import { updateStudentClass } from "./endpoints/updateStudentClass";
import { updateTeacherClass } from "./endpoints/updateTeacherClass";


app.post("/class", createClass); 
app.get("/class", activeClasses);
app.patch("/class", updateClassModule);

app.post("/student", createStudent);
app.get("/student", studentsByNameHobby);
app.patch("/student", updateStudentClass);

app.post("/teacher", createTeacher);
app.get("/teacher", teacherByNameSpecilty);
app.patch("/teacher", updateTeacherClass);