"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ProjectCard from "./ProjectCard";

export function ProjectGrid({ projects }) {
  const router = useRouter();
  const handleEditProject = (projectId) => {
    router.push(`/editor/${projectId}`);
    
  };
   if (!projects) {
    return <div>Loading...</div>; // or show a spinner
  }

  if (projects.length === 0) {
    return <div>No projects found.</div>; // handle empty case
  }


 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {projects.map((project) => (
        project ? (
        <ProjectCard
          key={project._id}
          project={project}
          onEdit={() => handleEditProject(project._id)}
        />
  ) : null
))}

    </div>
  );
}