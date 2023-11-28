-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "repository_path" TEXT NOT NULL,
    "has_deploy" BOOLEAN NOT NULL,
    "deploy_path" TEXT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "projects_repository_path_key" ON "projects"("repository_path");

-- CreateIndex
CREATE UNIQUE INDEX "projects_deploy_path_key" ON "projects"("deploy_path");
