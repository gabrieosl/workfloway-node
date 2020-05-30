import {MigrationInterface, QueryRunner} from "typeorm";

export class migrations1590699962965 implements MigrationInterface {
    name = 'migrations1590699962965'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subjects" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "project" character varying NOT NULL, "study" character varying NOT NULL, "matricule" character varying NOT NULL, "batch" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT 'now()', "updated_at" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "repetitions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "subject_id" uuid NOT NULL, "count" integer NOT NULL, "vehicle" character varying NOT NULL, "customer" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT 'now()', "updated_at" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_982d067008201c60e85bcdc9de0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "observation_type" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT 'now()', "updated_at" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_d2e0982dc071aa6df7d18624da2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "observations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "comment" character varying NOT NULL, "value" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT 'now()', "updated_at" TIMESTAMP NOT NULL DEFAULT 'now()', "type_id" uuid NOT NULL, "repetition_id" uuid NOT NULL, "user_id" character varying NOT NULL, CONSTRAINT "PK_f9208d64f50a76030758087c0ef" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "repetitions" ADD CONSTRAINT "FK_ca7f75b112375e00d3aed45293e" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "observations" ADD CONSTRAINT "FK_5bb580c8faaf9b445694561f5d5" FOREIGN KEY ("type_id") REFERENCES "observation_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "observations" ADD CONSTRAINT "FK_fe778909430fa63afac1387abe2" FOREIGN KEY ("repetition_id") REFERENCES "repetitions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "observations" DROP CONSTRAINT "FK_fe778909430fa63afac1387abe2"`);
        await queryRunner.query(`ALTER TABLE "observations" DROP CONSTRAINT "FK_5bb580c8faaf9b445694561f5d5"`);
        await queryRunner.query(`ALTER TABLE "repetitions" DROP CONSTRAINT "FK_ca7f75b112375e00d3aed45293e"`);
        await queryRunner.query(`DROP TABLE "observations"`);
        await queryRunner.query(`DROP TABLE "observation_type"`);
        await queryRunner.query(`DROP TABLE "repetitions"`);
        await queryRunner.query(`DROP TABLE "subjects"`);
    }

}
