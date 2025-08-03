/*
  Warnings:

  - The `sunday` column on the `colaborators` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "colaborators" DROP COLUMN "sunday",
ADD COLUMN     "sunday" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
