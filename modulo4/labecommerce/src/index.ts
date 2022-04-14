import app from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { registerProduct } from "./endpoints/registerProduct";
import { registerUser } from "./endpoints/registerUser";

app.post("/users", registerUser);
app.get("/users", getAllUsers );
app.post("/products", registerProduct);