import { NextFunction, Request, Response, Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";
import { ArticlesController } from "./controllers/ArticlesController";

const upload = multer(multerConfig);
const router = Router();
const articlesController = new ArticlesController();

router.get("/", (request: Request, response: Response, _next: NextFunction) => {
  response.json({ message: "hello from backend" });
});

router.get("/dashboard", (request: Request, response: Response) => {
  // TODO: fake stats
});

router.get("/purchased-articles", (request: Request, response: Response) => {
  // TODO: fake stats
});

router.get("/articles-you-wrote", (request: Request, response: Response) => {
  // TODO: fake stats
  // I may add an author id...
});

// create new article
router.post("/article", upload.single("image"), articlesController.create);

// get a specific article
router.get("/article/:id", articlesController.findArticle);

// get all articles
router.get("/articles", articlesController.show);

// get image through server
router.get("/assets/:filename", articlesController.findImage);

// get simple avatar
router.get("/avatar", articlesController.findAvatar);

export { router };
