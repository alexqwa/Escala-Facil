/*
  Warnings:

  - You are about to drop the column `weekOff` on the `colaborators` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "colaborators" DROP COLUMN "weekOff";

-- CreateTable
CREATE TABLE "weekdays" (
    "id" SERIAL NOT NULL,
    "day" INTEGER NOT NULL,
    "colaboratorId" INTEGER NOT NULL,

    CONSTRAINT "weekdays_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "weekdays" ADD CONSTRAINT "weekdays_colaboratorId_fkey" FOREIGN KEY ("colaboratorId") REFERENCES "colaborators"("id") ON DELETE CASCADE ON UPDATE CASCADE;
