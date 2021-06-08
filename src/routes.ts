import { NextFunction, Request, Response, Router } from "express";

const router = Router();

router.get("/", (request: Request, response: Response, _next: NextFunction) => {
  response.json({ message: "hello from backend" });
});

router.get("dashboard", (request: Request, response: Response) => {
  // TODO: fake stats
});

router.get("purchased-articles/", (request: Request, response: Response) => {
  // TODO: fake stats
});

router.get("articles-you-wrote/", (request: Request, response: Response) => {
  // TODO: fake stats
  // I may add an author id...
});

router.post("article/", (request: Request, response: Response) => {
  // TODO: controller for this
});

router.get("article/:id", (request: Request, response: Response) => {
  // TODO: controller for this
});

router.get("articles/", (request: Request, response: Response) => {
  // TODO: controller for this
});

router.get("article/:id/image", (request: Request, response: Response) => {
  // TODO: return image asset through url
});

router.get("avatar/", (request: Request, response: Response) => {
  // TODO: get simple avatar
});

export { router };
