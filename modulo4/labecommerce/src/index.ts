import app from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { registerUser } from "./endpoints/registerUser";

app.post("/users", registerUser);
app.get("/users", getAllUsers );