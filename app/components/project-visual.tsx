import Image from 'next/image';
import type { Project } from '../content';
import { assetPath } from './photo-art';

export function ProjectVisual({ project, priority = false }: { project: Project; priority?: boolean }) {
  if (!project.thumbnail) return null;
  return <Image className="project-thumbnail" src={assetPath(project.thumbnail.src)} alt={project.thumbnail.alt} width={960} height={540} unoptimized priority={priority} />;
}
