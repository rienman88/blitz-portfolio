import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import SkillCard from "../cards/SkillCard";
import FadeIn from "../ui/FadeIn";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24"
    >
      <Container>

        <SectionTitle title="About Me" />

        <FadeIn>

          <div className="grid gap-16 lg:grid-cols-2">

            {/* Left */}
            <div>

              <h2 className="mb-8 text-5xl font-bold">

                Building Secure

                <br />

                <span className="text-blue-500">

                  & Scalable Systems

                </span>

              </h2>

              <p className="mb-8 text-lg leading-9 text-gray-400">

                I have spent more than a decade supporting
                infrastructure, systems administration,
                networking, virtualization, and security
                technologies.

              </p>

              <p className="text-lg leading-9 text-gray-400">

                I believe strong security starts with strong
                infrastructure and reliable identity systems.

              </p>

            </div>

		{/* Right */}

		<div
		  className="
		  overflow-hidden

		  rounded-3xl

		  border
		  border-cyan-500/10

		  bg-[#071126]

		  shadow-[0_0_40px_rgba(59,130,246,0.1)]
		  "
		>

		  <div className="grid grid-cols-2 md:grid-cols-3">

		    <div className="border-r border-b border-cyan-500/10">
		      <SkillCard
			title="Linux"
			image="/icons/linux.svg"
		      />
		    </div>

		    <div className="border-r border-b border-cyan-500/10">
		      <SkillCard
			title="Docker"
			image="/icons/docker.svg"
		      />
		    </div>

		    <div className="border-b border-cyan-500/10">
		      <SkillCard
			title="Keycloak"
			image="/icons/keycloak.svg"
		      />
		    </div>

		    <div className="border-r border-cyan-500/10">
		      <SkillCard
			title="Networking"
			image="/icons/network.svg"
		      />
		    </div>

		    <div className="border-r border-cyan-500/10">
		      <SkillCard
			title="Virtualization"
			image="/icons/virtualization.svg"
		      />
		    </div>

		    <div>
		      <SkillCard
			title="Security"
			image="/icons/security.svg"
		      />
		    </div>

		  </div>

		</div>
          </div>

        </FadeIn>

      </Container>
    </section>
  );
}
