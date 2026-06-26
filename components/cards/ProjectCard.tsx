import { Project } from "@/types/project";

import ProjectWatermark from "../ui/ProjectWatermark";

type Props = {
  project: Project;
};

export default function ProjectCard({
  project,
}: Props) {
  return (
    <div
      className="
      relative

      overflow-hidden

      rounded-3xl

      border
      border-cyan-500/10

      bg-[#071126]

      p-8

      hover:border-cyan-500/20

      transition
      "
    >
	<ProjectWatermark
	  src={project.logo}
	  size={350}
	/>

      <div className="relative z-10">

        <h3
          className="
          mb-5

          text-3xl
          font-bold
          text-white
          "
        >
          {project.title}
        </h3>

        <p
          className="
          mb-6

          leading-9

          text-gray-300
          "
        >
          {project.description}
        </p>

        <div
          className="
          mb-6

          flex
          flex-wrap
          gap-3
          "
        >
          {project.technologies.map((tech) => (
            <div
              key={tech}
              className="
              rounded-xl

              border
              border-blue-500

              px-4
              py-2

              text-sm
              text-cyan-300
              "
            >
              {tech}
            </div>
          ))}
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          className="
          text-cyan-400

          hover:text-cyan-300
          "
        >
          View GitHub →
        </a>

      </div>
    </div>
  );
}
