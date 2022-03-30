import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { dataProducts } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

// ENDPOINTS

// Exercício 1
app.get("/test", (req, res) => {
    res.status(200).send("Teste");
});

// Exercício3
app.put("/product", (req, res) => {
    const name = req.body.name;
    const price = req.body.price;

    try{
        const newProduct = {
            id: Date.now().toString(),
            name: name,
            price: price
        }

        if (!newProduct.name) {
            throw new Error("Nome do produto inválido");
        } else if (!newProduct.price) {
            throw new Error("Preço do produto inválido");
        };

        dataProducts.push(newProduct);
        res.status(201).send({dataProducts});

    } catch (error : any) {
        switch (error.message) {
            case "Nome do produto inválido":
                res.status(422).send(error.message)
                break
            case "Preço do produto inválido":
                res.status(422).send(error.message)
                break
            default:
                res.status(500).send(error.message)
                break
        }
    }

});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;