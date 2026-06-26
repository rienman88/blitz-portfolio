import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import CertificationCard from "../cards/CertificationCard";
import RoadmapCard from "../cards/RoadmapCard";
import { certifications } from "@/data/certifications";
import { roadmap } from "@/data/roadmap";

export default function CertRoadmapSection() {
  return (
    <section
      id="certifications"
      className="py-24"
    >
      <Container>

        <SectionTitle
          title="Certifications & Roadmap"
        />

        <div
          className="
          grid
          gap-12

          lg:grid-cols-2
          "
        >

          {/* LEFT */}

          <div>

            <h2
              className="
              mb-8
              text-4xl
              font-bold
              text-white
              "
            >
              Active Certification
            </h2>

            <div className="space-y-8">

              {certifications.map((certification) => (
                <CertificationCard
                  key={certification.title}
                  certification={certification}
                />
              ))}

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <h2
              className="
              mb-8
              text-4xl
              font-bold
              text-white
              "
            >
              Current Roadmap
            </h2>

		<div
		  className="
		  rounded-3xl

		  border
		  border-cyan-500/10

		  bg-[#071126]

		  p-8
		  "
		>
		  {roadmap.map((item, index) => (
		    <RoadmapCard
		      key={item}
		      title={item}
		      isLast={index === roadmap.length - 1}
		    />
		  ))}
		</div>
          </div>

        </div>

      </Container>
    </section>
  );
}
