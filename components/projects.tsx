import projectdata from "@/public/projects/projects.json";
import ProjectCard from "./project_card";

export default function Projects() {
  return (
    <div>
      {projectdata.projects.map((project) => {
        return (
          <ProjectCard
            key={project.id}
            name={project.name}
            desc={project.desc}
            giturl={project.giturl}
            liveurl={project.liveurl}
          ></ProjectCard>
        );
      })}
    </div>
  );
}
