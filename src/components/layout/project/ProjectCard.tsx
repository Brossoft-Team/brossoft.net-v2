import React from "react";
import Link from "next/link";
import Button from "@/components/core-components/Button";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  image,
  slug,
}) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-2xl w-full h-full flex flex-col justify-between">
    <img src={image} alt={title} className="px-6 py-6 h-48 object-cover" />
    <div className="p-4 flex-grow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
    <div className="p-4 mt-auto">
      <Link href={`/projects/${slug}`} legacyBehavior>
        <Button label="See More" className="bg-yellow-500 text-white w-full h-10 rounded hover:bg-yellow-600">
          See More
        </Button>
      </Link>
    </div>
  </div>
  );
};

export default ProjectCard;
