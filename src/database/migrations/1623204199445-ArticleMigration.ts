import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ArticleMigration1623204199445 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "articles",
        columns: [
          { name: "id", type: "uuid", isPrimary: true },
          { name: "title", type: "varchar" },
          { name: "content", type: "varchar" },
          { name: "url_image", type: "varchar" },
          { name: "author", type: "varchar" },
          { name: "themes", type: "varchar", isArray: true },
          { name: "publisher", type: "varchar" },
          { name: "publication_date", type: "timestamp", default: "now()" },
          { name: "price", type: "double" },
          { name: "sales", type: "integer", default: 0 },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("articles");
  }
}
