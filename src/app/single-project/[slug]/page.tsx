import { notFound } from "next/navigation";
import projects from "@/app/data/project";
import { Project } from "../types";

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
  console.log("Current slug:", params.slug);
  console.log("Project data:", project);
  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover mb-4"
      />
      <p className="mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech: string) => (
          <span
            key={tech}
            className="bg-gray-200 text-gray-800 px-3 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
