import { EntityRepository, Repository } from "typeorm";
import { Article } from "../models/Article";

@EntityRepository(Article)
class ArticlesRepository extends Repository<Article> {}

export { ArticlesRepository };
