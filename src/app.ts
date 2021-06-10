import cors from "cors";
import express from "express";
import "reflect-metadata";
import "./database";
import { router } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

export { app };
