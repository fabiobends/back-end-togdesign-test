import { NextFunction, Request, Response, Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";
import { ArticlesController } from "./controllers/ArticlesController";
import { FakeStatsController } from "./controllers/FakeStatsController";

const upload = multer(multerConfig);
const router = Router();
const articlesController = new ArticlesController();
const fakeStatsController = new FakeStatsController();

router.get("/", (request: Request, response: Response, _next: NextFunction) => {
  response.json({ message: "hello from backend" });
});

// fake stats - dashboard
router.get("/dashboard", fakeStatsController.dashboard);

// fake stats - dashboard plot 
router.get("/dashboard-plot", fakeStatsController.dashboardPlot);

// fake stats - purchased articles
router.get("/purchased-articles", fakeStatsController.purchasedArticles);

// fake stats - articles you wrote
router.get("/articles-you-wrote", fakeStatsController.articlesYouWrote);

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
