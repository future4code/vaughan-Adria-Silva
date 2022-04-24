import { app } from "./app";
import { activeClasses } from "./endpoints/activeClasses";
import { createClass } from "./endpoints/createClass";


app.post("/class", createClass); 
app.get("/class", activeClasses);