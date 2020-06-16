import {MigrationInterface, QueryRunner} from "typeorm";

export class migrations31591975080410 implements MigrationInterface {
    name = 'migrations31591975080410'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subjects" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "subjects" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "repetitions" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "repetitions" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "observation_type" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "observation_type" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "observations" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "observations" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "avatar" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "avatar" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "observations" ALTER COLUMN "updated_at" SET DEFAULT '2020-06-09 22:49:54.894555'`);
        await queryRunner.query(`ALTER TABLE "observations" ALTER COLUMN "created_at" SET DEFAULT '2020-06-09 22:49:54.894555'`);
        await queryRunner.query(`ALTER TABLE "observation_type" ALTER COLUMN "updated_at" SET DEFAULT '2020-06-09 22:49:54.894555'`);
        await queryRunner.query(`ALTER TABLE "observation_type" ALTER COLUMN "created_at" SET DEFAULT '2020-06-09 22:49:54.894555'`);
        await queryRunner.query(`ALTER TABLE "repetitions" ALTER COLUMN "updated_at" SET DEFAULT '2020-06-09 22:49:54.894555'`);
        await queryRunner.query(`ALTER TABLE "repetitions" ALTER COLUMN "created_at" SET DEFAULT '2020-06-09 22:49:54.894555'`);
        await queryRunner.query(`ALTER TABLE "subjects" ALTER COLUMN "updated_at" SET DEFAULT '2020-06-09 22:49:54.894555'`);
        await queryRunner.query(`ALTER TABLE "subjects" ALTER COLUMN "created_at" SET DEFAULT '2020-06-09 22:49:54.894555'`);
    }

}
