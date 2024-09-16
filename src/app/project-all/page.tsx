import React from "react";
import projects from "../data/project";
import ProjectCard from "@/components/layout/project/ProjectCard";

const AllProjectsPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">All Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id} 
            title={project.title}
            description={project.description}
            image={project.image}
            slug={project.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProjectsPage;


