// import app from "./app"

import { app } from "./app";
import { createTable } from "./data/migration";
import { postAddress } from "./endpoints/postAddress";
import { getAddressInfo } from "./services/getAddressInfo";

// Exercício 1 e 2
// const main = async () => {
//     try {
//         await createTable();
//         const address = await getAddressInfo(60510196);
//         console.log(address);
//     } catch (error: any) {
//         console.log(error)
//     };
// };

// main();

//Exercício 3
app.post("/address", postAddress);
