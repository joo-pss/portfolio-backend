import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import { ProjectsController } from "./app/controllers/projects-controller";
import { SendersController } from "./app/controllers/senders-controller";

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(json());

app.get("/projects", async (req, res) => {
  res.status(200).send(await ProjectsController.instance.findAll());
});

app.post("/senders", async (req, res) => {
  res.status(201).send(await SendersController.instance.create(req.body));
});

app.listen(process.env.PORT ?? 3000);
