-- AlterTable
CREATE SEQUENCE numofholders_id_seq;
ALTER TABLE "NumOfHolders" ALTER COLUMN "id" SET DEFAULT nextval('numofholders_id_seq'),
ALTER COLUMN "date" SET DATA TYPE TEXT;
ALTER SEQUENCE numofholders_id_seq OWNED BY "NumOfHolders"."id";
