import {MigrationInterface, QueryRunner} from "typeorm";

export class migrations41592000836314 implements MigrationInterface {
    name = 'migrations41592000836314'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subjects" RENAME COLUMN "matricule" TO "name"`);
        await queryRunner.query(`ALTER TABLE "subjects" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "subjects" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "repetitions" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "repetitions" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "observation_type" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "observation_type" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "observations" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "observations" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "observations" ALTER COLUMN "updated_at" SET DEFAULT '2020-06-12 15:18:07.195747'`);
        await queryRunner.query(`ALTER TABLE "observations" ALTER COLUMN "created_at" SET DEFAULT '2020-06-12 15:18:07.195747'`);
        await queryRunner.query(`ALTER TABLE "observation_type" ALTER COLUMN "updated_at" SET DEFAULT '2020-06-12 15:18:07.195747'`);
        await queryRunner.query(`ALTER TABLE "observation_type" ALTER COLUMN "created_at" SET DEFAULT '2020-06-12 15:18:07.195747'`);
        await queryRunner.query(`ALTER TABLE "repetitions" ALTER COLUMN "updated_at" SET DEFAULT '2020-06-12 15:18:07.195747'`);
        await queryRunner.query(`ALTER TABLE "repetitions" ALTER COLUMN "created_at" SET DEFAULT '2020-06-12 15:18:07.195747'`);
        await queryRunner.query(`ALTER TABLE "subjects" ALTER COLUMN "updated_at" SET DEFAULT '2020-06-12 15:18:07.195747'`);
        await queryRunner.query(`ALTER TABLE "subjects" ALTER COLUMN "created_at" SET DEFAULT '2020-06-12 15:18:07.195747'`);
        await queryRunner.query(`ALTER TABLE "subjects" RENAME COLUMN "name" TO "matricule"`);
    }

}
