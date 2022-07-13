-- CreateTable
CREATE TABLE "DreamCatcher" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DreamCatcher_pkey" PRIMARY KEY ("id")
);
