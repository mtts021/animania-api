-- CreateTable
CREATE TABLE "premiere" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "path_image" TEXT NOT NULL,
    "genres" TEXT[],
    "streaming" TEXT NOT NULL,
    "totalEpisodes" INTEGER NOT NULL,
    "currentEpisode" INTEGER NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL,
    "isAiring" TEXT NOT NULL,
    "season" INTEGER NOT NULL,
    "weeklyDayAiring" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,
    "deslikes" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "premiere_pkey" PRIMARY KEY ("id")
);
