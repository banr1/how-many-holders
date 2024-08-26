/*
  Warnings:

  - You are about to drop the column `contract` on the `NumOfHolders` table. All the data in the column will be lost.
  - Added the required column `contractAddress` to the `NumOfHolders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "NumOfHolders" DROP COLUMN "contract",
ADD COLUMN     "contractAddress" TEXT NOT NULL;
