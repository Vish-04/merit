/*
  Warnings:

  - You are about to drop the `_DepartmentToProfessor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Email" DROP CONSTRAINT "Email_Department_fkey";

-- DropForeignKey
ALTER TABLE "Personalization" DROP CONSTRAINT "Personalization_Department_fkey";

-- DropForeignKey
ALTER TABLE "_DepartmentToProfessor" DROP CONSTRAINT "_DepartmentToProfessor_A_fkey";

-- DropForeignKey
ALTER TABLE "_DepartmentToProfessor" DROP CONSTRAINT "_DepartmentToProfessor_B_fkey";

-- AlterTable
ALTER TABLE "Department" ADD COLUMN     "emails" INTEGER[],
ADD COLUMN     "personalizations" INTEGER[],
ADD COLUMN     "professors" INTEGER[];

-- AlterTable
ALTER TABLE "Email" ADD COLUMN     "department" INTEGER[];

-- AlterTable
ALTER TABLE "Personalization" ADD COLUMN     "department" INTEGER[];

-- AlterTable
ALTER TABLE "Professor" ADD COLUMN     "department" INTEGER[];

-- DropTable
DROP TABLE "_DepartmentToProfessor";
