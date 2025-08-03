-- CreateTable
CREATE TABLE "scales" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "periodScale" TEXT NOT NULL,

    CONSTRAINT "scales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "colaborators" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "turn" BOOLEAN NOT NULL,
    "sunday" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "weekday" INTEGER[],
    "scaleId" INTEGER NOT NULL,

    CONSTRAINT "colaborators_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "colaborators" ADD CONSTRAINT "colaborators_scaleId_fkey" FOREIGN KEY ("scaleId") REFERENCES "scales"("id") ON DELETE CASCADE ON UPDATE CASCADE;
