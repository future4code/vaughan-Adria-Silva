import app from "./app";
import { getAllProducts } from "./endpoints/getAllProducts";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getPurchasesUser } from "./endpoints/getPurchasesUser";
import { registerProduct } from "./endpoints/registerProduct";
import { registerPurchase } from "./endpoints/registerPurchase";
import { registerUser } from "./endpoints/registerUser";

app.post("/users", registerUser);
app.get("/users", getAllUsers );
app.post("/products", registerProduct);
app.get("/products", getAllProducts);
app.post("/purchases", registerPurchase);
app.get("/users/:user_id/purchases", getPurchasesUser);