import { projectsBase } from "./data/projects-base"
import type { ProjectItem } from "./types"

export function mergeProjects(
  content: { title: string; description: string }[],
): ProjectItem[] {
  return projectsBase.map((base, index) => ({
    image: base.image,
    github: base.github,
    live: base.live,
    featured: base.featured,
    categories: [...base.categories],
    technologies: [...base.technologies],
    complexity: "complexity" in base ? (base.complexity as number) : 0,
    title: content[index]?.title ?? "",
    description: content[index]?.description ?? "",
  }))
}
