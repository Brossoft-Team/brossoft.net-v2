import { notFound } from "next/navigation";
import projects from "@/app/data/project";
import { Project } from "../types";
import ProjectDetails from "@/components/layout/project/ProjectDetails";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

async function getProjectBySlug(slug: string): Promise<Project | null> {
  const project = projects.find((p) => p.slug === slug) || null;
  return project;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <ProjectDetails
        key={project.id}
        id={project.id}
        title={project.title}
        details={project.details}
        image={project.image}
        technologies={project.technologies}
      />
    </div>
  );
}
