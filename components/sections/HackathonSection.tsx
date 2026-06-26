import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import HackathonCard from "../cards/HackathonCard";

import { hackathons } from "@/data/hackathons";

export default function HackathonSection() {
  return (
    <section
      id="hackathons"
      className="py-24"
    >
      <Container>

        <SectionTitle
          title="Hackathon Participations"
        />

        <div
          className="
          rounded-3xl

          border
          border-cyan-500/10

          bg-[#071126]

          p-12
          "
        >
          {hackathons.map((hackathon) => (
            <HackathonCard
              key={hackathon.name}
              hackathon={hackathon}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}
