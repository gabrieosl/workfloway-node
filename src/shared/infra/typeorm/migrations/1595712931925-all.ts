import { MigrationInterface, QueryRunner } from 'typeorm';

export class all1595712931925 implements MigrationInterface {
  name = 'all1595712931925';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tags" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "subject_to_tags" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "subjectId" uuid NOT NULL, "tagId" uuid NOT NULL, "value" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6012db9eeb8a709621c1b23aaa5" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "submissions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "subject_id" uuid, "repetition" integer NOT NULL, "closed" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_10b3be95b8b2fb1e482e07d706b" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "subjects" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "workflow_id" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "avatar" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "observations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type_id" character varying, "subject_id" uuid, "submission_id" character varying, "user_id" uuid, "value" character varying, "comment" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f9208d64f50a76030758087c0ef" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "observation_type" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d2e0982dc071aa6df7d18624da2" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "user_tokens" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "token" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_63764db9d9aaa4af33e07b2f4bf" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "subject_to_tags" ADD CONSTRAINT "FK_ceb03c005bd03d566748cc5efd5" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "subject_to_tags" ADD CONSTRAINT "FK_ea8f4f4bcf7cebe7e1647f7a4a0" FOREIGN KEY ("tagId") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "submissions" ADD CONSTRAINT "FK_3d73355304fe8b9545de68304b0" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "observations" ADD CONSTRAINT "FK_d0bf217b357d328890afe2e7d86" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "observations" ADD CONSTRAINT "FK_88eae7963224eb29d6ae03b9e63" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "observations" DROP CONSTRAINT "FK_88eae7963224eb29d6ae03b9e63"`
    );
    await queryRunner.query(
      `ALTER TABLE "observations" DROP CONSTRAINT "FK_d0bf217b357d328890afe2e7d86"`
    );
    await queryRunner.query(
      `ALTER TABLE "submissions" DROP CONSTRAINT "FK_3d73355304fe8b9545de68304b0"`
    );
    await queryRunner.query(
      `ALTER TABLE "subject_to_tags" DROP CONSTRAINT "FK_ea8f4f4bcf7cebe7e1647f7a4a0"`
    );
    await queryRunner.query(
      `ALTER TABLE "subject_to_tags" DROP CONSTRAINT "FK_ceb03c005bd03d566748cc5efd5"`
    );
    await queryRunner.query(`DROP TABLE "user_tokens"`);
    await queryRunner.query(`DROP TABLE "observation_type"`);
    await queryRunner.query(`DROP TABLE "observations"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "subjects"`);
    await queryRunner.query(`DROP TABLE "submissions"`);
    await queryRunner.query(`DROP TABLE "subject_to_tags"`);
    await queryRunner.query(`DROP TABLE "tags"`);
  }
}
