-- CreateTable
CREATE TABLE "weekdays" (
    "id" SERIAL NOT NULL,
    "day" INTEGER NOT NULL,
    "colaboratorId" INTEGER NOT NULL,

    CONSTRAINT "weekdays_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scales" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "periodScale" TEXT NOT NULL,

    CONSTRAINT "scales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "colaborators" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "turn" BOOLEAN NOT NULL,
    "sunday" INTEGER NOT NULL,
    "scaleId" INTEGER NOT NULL,

    CONSTRAINT "colaborators_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "weekdays" ADD CONSTRAINT "weekdays_colaboratorId_fkey" FOREIGN KEY ("colaboratorId") REFERENCES "colaborators"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "colaborators" ADD CONSTRAINT "colaborators_scaleId_fkey" FOREIGN KEY ("scaleId") REFERENCES "scales"("id") ON DELETE CASCADE ON UPDATE CASCADE;
