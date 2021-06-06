import express, { NextFunction, Request, Response } from "express";
import "reflect-metadata";

const app = express();

app.use(express.json());

app.get("/", (request: Request, response: Response, _next: NextFunction) => {
  response.json({ message: "hello backend" });
});

export { app };
