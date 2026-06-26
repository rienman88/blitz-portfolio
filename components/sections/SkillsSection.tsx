import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import SkillCategoryCard from "../cards/SkillCategoryCard";

import FadeIn from "../ui/FadeIn";

import { skillCategories } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24"
    >
      <Container>

        <SectionTitle title="Technical Skills" />

        <FadeIn>

          <div className="grid gap-8 lg:grid-cols-2">

            {skillCategories.map((category) => (
              <SkillCategoryCard
                key={category.title}
                title={category.title}
                skills={category.skills}
              />
            ))}

          </div>

        </FadeIn>

      </Container>
    </section>
  );
}
