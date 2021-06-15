import { Request, Response } from "express";
import path from "path";
import { getCustomRepository } from "typeorm";
import { ArticlesRepository } from "../repositories/ArticlesRepository";
class ArticlesController {
  async create(request: Request, response: Response) {
    let url_image = "";

    if (request.file) {
      url_image = `http://localhost:3333/assets/${request.file.filename}`;
    } else {
        url_image = `https://picsum.photos/824/478`; // random image
    }

    const { title, content, price, sales, publisher, author, themes } =
      request.body;

    const articlesRepository = getCustomRepository(ArticlesRepository);

    const article = articlesRepository.create({
      title,
      content,
      url_image,
      price,
      sales,
      publisher,
      author,
      themes,
    });

    try {
      await articlesRepository.save(article);
    } catch (e) {
      console.log(e);
    }

    console.log(response.json(article));
    return response.status(201).json(article);
  }

  async findArticle(request: Request, response: Response) {
    const articlesRepository = getCustomRepository(ArticlesRepository);
    
    console.log(request.params.id);
    const article = await articlesRepository.findOne(request.params.id);

    return response.json(article);
  }

  async show(request: Request, response: Response) {
    const articlesRepository = getCustomRepository(ArticlesRepository);

    const all = await articlesRepository.find();

    return response.json(all);
  }

  async findImage(request: Request, response: Response) {
    const filename = request.params.filename;

    const auxPath = path.resolve(__dirname, "..", "..");
    const image = auxPath + `/uploads/${filename}`;

    return response.sendFile(image);
  }

  async findAvatar(request: Request, response: Response) {
    const auxPath = path.resolve(__dirname, "..", "..");
    const avatar = auxPath + `/uploads/avatar.png`;

    return response.sendFile(avatar);
  }
}

export { ArticlesController };
