
import React from "react";
import ProjectCard from "./ProjectCard";

interface ProjectsGridProps {
  projects: {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
  }[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  return (
    <div >
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default ProjectsGrid;
