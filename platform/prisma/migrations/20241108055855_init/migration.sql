-- AlterTable
CREATE SEQUENCE department_id_seq;
ALTER TABLE "Department" ALTER COLUMN "id" SET DEFAULT nextval('department_id_seq');
ALTER SEQUENCE department_id_seq OWNED BY "Department"."id";

-- AlterTable
CREATE SEQUENCE email_id_seq;
ALTER TABLE "Email" ALTER COLUMN "id" SET DEFAULT nextval('email_id_seq');
ALTER SEQUENCE email_id_seq OWNED BY "Email"."id";

-- AlterTable
CREATE SEQUENCE personalization_id_seq;
ALTER TABLE "Personalization" ALTER COLUMN "id" SET DEFAULT nextval('personalization_id_seq');
ALTER SEQUENCE personalization_id_seq OWNED BY "Personalization"."id";

-- AlterTable
CREATE SEQUENCE professor_id_seq;
ALTER TABLE "Professor" ALTER COLUMN "id" SET DEFAULT nextval('professor_id_seq');
ALTER SEQUENCE professor_id_seq OWNED BY "Professor"."id";
