/*
  Warnings:

  - The `weekOff` column on the `colaborators` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "colaborators" DROP CONSTRAINT "colaborators_scaleId_fkey";

-- AlterTable
ALTER TABLE "colaborators" DROP COLUMN "weekOff",
ADD COLUMN     "weekOff" INTEGER[];

-- AddForeignKey
ALTER TABLE "colaborators" ADD CONSTRAINT "colaborators_scaleId_fkey" FOREIGN KEY ("scaleId") REFERENCES "scales"("id") ON DELETE CASCADE ON UPDATE CASCADE;
