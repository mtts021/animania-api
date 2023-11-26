/*
  Warnings:

  - You are about to drop the column `current_episode` on the `release` table. All the data in the column will be lost.
  - You are about to drop the column `deslikes` on the `release` table. All the data in the column will be lost.
  - You are about to drop the column `is_airing` on the `release` table. All the data in the column will be lost.
  - You are about to drop the column `weekly_day_airing` on the `release` table. All the data in the column will be lost.
  - The `streaming` column on the `release` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `status` to the `release` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "release" DROP COLUMN "current_episode",
DROP COLUMN "deslikes",
DROP COLUMN "is_airing",
DROP COLUMN "weekly_day_airing",
ADD COLUMN     "dislikes" INTEGER,
ADD COLUMN     "next_episode" INTEGER,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "updated_at" DATE,
ADD COLUMN     "weekly_day" VARCHAR,
DROP COLUMN "streaming",
ADD COLUMN     "streaming" VARCHAR[],
ALTER COLUMN "season" SET DATA TYPE VARCHAR;
