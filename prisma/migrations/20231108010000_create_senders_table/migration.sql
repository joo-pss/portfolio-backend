-- CreateTable
CREATE TABLE "senders" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "senders_pkey" PRIMARY KEY ("id")
);
