import { MigrationInterface, QueryRunner } from 'typeorm';

export class migrations21591742968079 implements MigrationInterface {
  name = 'migrations21591742968079';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "avatar" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "user_tokens" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "token" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_63764db9d9aaa4af33e07b2f4bf" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "subjects" ALTER COLUMN "created_at" SET DEFAULT 'now()'`
    );
    await queryRunner.query(
      `ALTER TABLE "subjects" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`
    );
    await queryRunner.query(
      `ALTER TABLE "submissions" DROP CONSTRAINT "FK_ca7f75b112375e00d3aed45293e"`
    );
    await queryRunner.query(
      `ALTER TABLE "submissions" ALTER COLUMN "subject_id" DROP NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "submissions" ALTER COLUMN "created_at" SET DEFAULT 'now()'`
    );
    await queryRunner.query(
      `ALTER TABLE "submissions" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`
    );
    await queryRunner.query(
      `ALTER TABLE "observation_type" ALTER COLUMN "created_at" SET DEFAULT 'now()'`
    );
    await queryRunner.query(
      `ALTER TABLE "observation_type" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`
    );
    await queryRunner.query(
      `ALTER TABLE "observations" ALTER COLUMN "created_at" SET DEFAULT 'now()'`
    );
    await queryRunner.query(
      `ALTER TABLE "observations" ALTER COLUMN "updated_at" SET DEFAULT 'now()'`
    );
    await queryRunner.query(
      `ALTER TABLE "submissions" ADD CONSTRAINT "FK_ca7f75b112375e00d3aed45293e" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "submissions" DROP CONSTRAINT "FK_ca7f75b112375e00d3aed45293e"`
    );
    await queryRunner.query(
      `ALTER TABLE "observations" ALTER COLUMN "updated_at" SET DEFAULT '2020-06-09 16:58:31.825614'`
    );
    await queryRunner.query(
      `ALTER TABLE "observations" ALTER COLUMN "created_at" SET DEFAULT '2020-06-09 16:58:31.825614'`
    );
    await queryRunner.query(
      `ALTER TABLE "observation_type" ALTER COLUMN "updated_at" SET DEFAULT '2020-06-09 16:58:31.825614'`
    );
    await queryRunner.query(
      `ALTER TABLE "observation_type" ALTER COLUMN "created_at" SET DEFAULT '2020-06-09 16:58:31.825614'`
    );
    await queryRunner.query(
      `ALTER TABLE "submissions" ALTER COLUMN "updated_at" SET DEFAULT '2020-06-09 16:58:31.825614'`
    );
    await queryRunner.query(
      `ALTER TABLE "submissions" ALTER COLUMN "created_at" SET DEFAULT '2020-06-09 16:58:31.825614'`
    );
    await queryRunner.query(
      `ALTER TABLE "submissions" ALTER COLUMN "subject_id" SET NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "submissions" ADD CONSTRAINT "FK_ca7f75b112375e00d3aed45293e" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "subjects" ALTER COLUMN "updated_at" SET DEFAULT '2020-06-09 16:58:31.825614'`
    );
    await queryRunner.query(
      `ALTER TABLE "subjects" ALTER COLUMN "created_at" SET DEFAULT '2020-06-09 16:58:31.825614'`
    );
    await queryRunner.query(`DROP TABLE "user_tokens"`);
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
