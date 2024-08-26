-- CreateTable
CREATE TABLE "NumOfHolders" (
    "id" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "contract" TEXT NOT NULL,
    "nHolders" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NumOfHolders_pkey" PRIMARY KEY ("id")
);
