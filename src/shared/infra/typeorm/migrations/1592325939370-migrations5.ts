import {MigrationInterface, QueryRunner} from "typeorm";

export class migrations51592325939370 implements MigrationInterface {
    name = 'migrations51592325939370'

    public async up(queryRunner: QueryRunner): Promise<void> {
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
        await queryRunner.query(`ALTER TABLE "observations" ALTER COLUMN "updated_at" SET DEFAULT '2020-06-12 22:28:26.366833'`);
        await queryRunner.query(`ALTER TABLE "observations" ALTER COLUMN "created_at" SET DEFAULT '2020-06-12 22:28:26.366833'`);
        await queryRunner.query(`ALTER TABLE "observation_type" ALTER COLUMN "updated_at" SET DEFAULT '2020-06-12 22:28:26.366833'`);
        await queryRunner.query(`ALTER TABLE "observation_type" ALTER COLUMN "created_at" SET DEFAULT '2020-06-12 22:28:26.366833'`);
        await queryRunner.query(`ALTER TABLE "repetitions" ALTER COLUMN "updated_at" SET DEFAULT '2020-06-12 22:28:26.366833'`);
        await queryRunner.query(`ALTER TABLE "repetitions" ALTER COLUMN "created_at" SET DEFAULT '2020-06-12 22:28:26.366833'`);
        await queryRunner.query(`ALTER TABLE "subjects" ALTER COLUMN "updated_at" SET DEFAULT '2020-06-12 22:28:26.366833'`);
        await queryRunner.query(`ALTER TABLE "subjects" ALTER COLUMN "created_at" SET DEFAULT '2020-06-12 22:28:26.366833'`);
    }

}
