import { projectsBase } from "./data/projects-base"
import type { ProjectItem } from "./types"

export function mergeProjects(
  content: { title: string; description: string }[],
): ProjectItem[] {
  return projectsBase.map((base, index) => ({
    image: base.image,
    github: base.github,
    live: base.live,
    technologies: [...base.technologies],
    title: content[index]?.title ?? "",
    description: content[index]?.description ?? "",
  }))
}
