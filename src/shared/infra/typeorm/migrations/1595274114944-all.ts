import {MigrationInterface, QueryRunner} from "typeorm";

export class all1595274114944 implements MigrationInterface {
    name = 'all1595274114944'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tags" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "tags" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "submissions" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "submissions" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "subjects" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "subjects" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "observations" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "observations" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "observation_type" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "observation_type" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "observation_type" ALTER COLUMN "updated_at" SET DEFAULT '2020-07-20 19:35:46.086092'`);
        await queryRunner.query(`ALTER TABLE "observation_type" ALTER COLUMN "created_at" SET DEFAULT '2020-07-20 19:35:46.086092'`);
        await queryRunner.query(`ALTER TABLE "observations" ALTER COLUMN "updated_at" SET DEFAULT '2020-07-20 19:35:46.086092'`);
        await queryRunner.query(`ALTER TABLE "observations" ALTER COLUMN "created_at" SET DEFAULT '2020-07-20 19:35:46.086092'`);
        await queryRunner.query(`ALTER TABLE "subjects" ALTER COLUMN "updated_at" SET DEFAULT '2020-07-20 19:35:46.086092'`);
        await queryRunner.query(`ALTER TABLE "subjects" ALTER COLUMN "created_at" SET DEFAULT '2020-07-20 19:35:46.086092'`);
        await queryRunner.query(`ALTER TABLE "submissions" ALTER COLUMN "updated_at" SET DEFAULT '2020-07-20 19:35:46.086092'`);
        await queryRunner.query(`ALTER TABLE "submissions" ALTER COLUMN "created_at" SET DEFAULT '2020-07-20 19:35:46.086092'`);
        await queryRunner.query(`ALTER TABLE "tags" ALTER COLUMN "updated_at" SET DEFAULT '2020-07-20 19:35:46.086092'`);
        await queryRunner.query(`ALTER TABLE "tags" ALTER COLUMN "created_at" SET DEFAULT '2020-07-20 19:35:46.086092'`);
    }

}
