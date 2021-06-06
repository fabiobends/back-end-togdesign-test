import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("articles")
class Article {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  author: string;

  @Column({ array: true })
  themes: string;

  @Column()
  price: number;

  @Column()
  sales: number;

  @Column()
  publisher: string;

  @CreateDateColumn()
  publication_date: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Article };
