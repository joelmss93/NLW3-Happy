import { Column, MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1602696619607 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "images",
      columns: [
        {
          name: "id",
          type: "integer",
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'path',
          type: 'varchar',
        },
        {
          name: 'orphanages_id',
          type: 'integer',
        }
      ],
      foreignKeys: [{
        name: "ImageOrphanage",
        columnNames: ['orphanages_id'],
        referencedTableName: 'orphanages',
        referencedColumnNames: ['id'],
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images');
  }

}
