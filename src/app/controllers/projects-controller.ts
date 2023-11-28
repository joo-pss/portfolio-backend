import { prisma } from "../config/db";

export class ProjectsController {
  private static _instance = new ProjectsController();

  private constructor() {}

  static get instance() {
    return this._instance;
  }

  async findAll() {
    const projects = await prisma.project.findMany({
      include: {
        technologies: true,
      },
    });

    return projects.map((project) => {
      return {
        ...project,
        technologies: project.technologies.map((technology) => technology.name),
      };
    });
  }
}
