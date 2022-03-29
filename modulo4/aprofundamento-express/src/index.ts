import express from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { usersTask } from './data';

const app = express();

app.use(express.json());
app.use(cors());

// ENDPOINTS
// Exercício 1

app.get("/ping", (req, res) => {
    res.send("Pong!");
});

// Exercício 4

app.get("/tasks/:completed", (req, res) => {
    const completedTasks = usersTask.filter(task => {
        return task.completed.toString() === req.params.completed;
    })
    res.send(completedTasks);
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
});;