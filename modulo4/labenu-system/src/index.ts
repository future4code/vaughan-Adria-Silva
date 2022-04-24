import { app } from "./app";
import { activeClasses } from "./endpoints/activeClasses";
import { createClass } from "./endpoints/createClass";
import { updateClassModule } from "./endpoints/updateClassModule";


app.post("/class", createClass); 
app.get("/class", activeClasses);
app.patch("/class", updateClassModule);