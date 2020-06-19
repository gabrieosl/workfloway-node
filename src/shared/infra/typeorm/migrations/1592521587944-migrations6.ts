import {MigrationInterface, QueryRunner} from "typeorm";

export class migrations61592521587944 implements MigrationInterface {
    name = 'migrations61592521587944'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "submissions" DROP CONSTRAINT "FK_ca7f75b112375e00d3aed45293e"`);
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
        await queryRunner.query(`ALTER TABLE "submissions" ADD CONSTRAINT "FK_3d73355304fe8b9545de68304b0" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "submissions" DROP CONSTRAINT "FK_3d73355304fe8b9545de68304b0"`);
        await queryRunner.query(`ALTER TABLE "observation_type" ALTER COLUMN "updated_at" SET DEFAULT '2020-06-18 21:22:22.696597'`);
        await queryRunner.query(`ALTER TABLE "observation_type" ALTER COLUMN "created_at" SET DEFAULT '2020-06-18 21:22:22.696597'`);
        await queryRunner.query(`ALTER TABLE "observations" ALTER COLUMN "updated_at" SET DEFAULT '2020-06-18 21:22:22.696597'`);
        await queryRunner.query(`ALTER TABLE "observations" ALTER COLUMN "created_at" SET DEFAULT '2020-06-18 21:22:22.696597'`);
        await queryRunner.query(`ALTER TABLE "subjects" ALTER COLUMN "updated_at" SET DEFAULT '2020-06-18 21:22:22.696597'`);
        await queryRunner.query(`ALTER TABLE "subjects" ALTER COLUMN "created_at" SET DEFAULT '2020-06-18 21:22:22.696597'`);
        await queryRunner.query(`ALTER TABLE "submissions" ALTER COLUMN "updated_at" SET DEFAULT '2020-06-18 21:22:22.696597'`);
        await queryRunner.query(`ALTER TABLE "submissions" ALTER COLUMN "created_at" SET DEFAULT '2020-06-18 21:22:22.696597'`);
        await queryRunner.query(`ALTER TABLE "tags" ALTER COLUMN "updated_at" SET DEFAULT '2020-06-18 21:22:22.696597'`);
        await queryRunner.query(`ALTER TABLE "tags" ALTER COLUMN "created_at" SET DEFAULT '2020-06-18 21:22:22.696597'`);
        await queryRunner.query(`ALTER TABLE "submissions" ADD CONSTRAINT "FK_ca7f75b112375e00d3aed45293e" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
