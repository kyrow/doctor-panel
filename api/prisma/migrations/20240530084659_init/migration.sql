-- CreateEnum
CREATE TYPE "D_TYPE" AS ENUM ('DOCTOR', 'CLIENT');

-- CreateTable
CREATE TABLE "Form" (
    "id" SERIAL NOT NULL,
    "fio" TEXT NOT NULL,
    "type" "D_TYPE" NOT NULL DEFAULT 'CLIENT',
    "client_file" TEXT NOT NULL,
    "doctor_file" TEXT,
    "doctor_diagnosis" TEXT,
    "doctor_description" TEXT,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);
