import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import ProjectCard from "../cards/ProjectCard";
import RepositoryCard from "../cards/RepositoryCard";

import { projects } from "@/data/projects";

export default function ProjectsReposSection() {
  return (
    <section
      id="projects"
      className="py-24"
    >
      <Container>

        <SectionTitle
          title="Projects & Repositories"
        />

        <div className="grid gap-12 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div>

            <h2 className="mb-8 text-4xl font-bold text-white">
              Featured Projects
            </h2>

            <div className="space-y-8">

              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                />
              ))}

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            <h2 className="mb-8 text-4xl font-bold text-white">
              GitHub Repositories
            </h2>

            <div className="space-y-8">

              <RepositoryCard
                name="Blitz_soc_demo"
                description="SOC workflow and detection engineering demonstrations."
                language="Python"
                updated="Active"
                url="https://github.com/rienman88"
                logo="/project-logos/blitz-soc.png"
              />

              <RepositoryCard
                name="Blitz_TraceGrid_OlympicHackathon2026"
                description="Olympic Hackathon submission and investigation platform."
                language="TypeScript"
                updated="Active"
                url="https://github.com/rienman88"
                logo="/project-logos/tracegrid.png"
              />

              <RepositoryCard
                name="Blitz-DFIR-Results"
                description="DFIR reports, investigations and correlation outputs."
                language="Python"
                updated="Active"
                url="https://github.com/rienman88"
                logo="/project-logos/blitz-results.png"
              />

              <RepositoryCard
                name="portfolio"
                description="Cybersecurity portfolio website."
                language="TypeScript"
                updated="Active"
                url="https://github.com/rienman88"
                logo="/project-logos/portfolio.png"
              />

              <RepositoryCard
                name="codesentinel-milan-hackathon"
                description="AI security project built for Milan AI Hackathon."
                language="Python"
                updated="Active"
                url="https://github.com/rienman88"
                logo="/project-logos/codesentinel.png"
              />

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}
