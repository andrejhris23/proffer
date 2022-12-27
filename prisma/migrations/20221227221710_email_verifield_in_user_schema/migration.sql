/*
  Warnings:

  - A unique constraint covering the columns `[emailVerified]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "emailVerified" BOOLEAN;

-- CreateIndex
CREATE UNIQUE INDEX "User_emailVerified_key" ON "User"("emailVerified");
