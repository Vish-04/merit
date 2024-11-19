/*
  Warnings:

  - You are about to drop the column `personalizations` on the `Department` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Professor` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Department" DROP COLUMN "personalizations";

-- CreateIndex
CREATE UNIQUE INDEX "Professor_email_key" ON "Professor"("email");
