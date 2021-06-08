import express, { NextFunction, Request, Response } from "express";
import multer from "multer";
import "reflect-metadata";
import multerConfig from "./config/multer";
import { router } from "./routes";

const app = express();
const upload = multer(multerConfig);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.post(
  "/articles",
  upload.single("image"),
  (request: Request, response: Response, _next: NextFunction) => {
    console.log(request.file);
    response.json({ message: "image uploaded" });
  }
);

export { app };
