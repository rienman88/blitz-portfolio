import Container from "../ui/Container";
import StatCard from "../cards/StatCard";

export default function StatsSection() {
  return (
    <section className="pb-20">

      <Container>

        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-12">

          <div className="grid gap-8 md:grid-cols-4">

            <StatCard
              value="10+"
              title="Years Experience"
            />

            <StatCard
              value="5+"
              title="Repositories"
            />
            
             <StatCard
              value="3"
              title="Hackathon Submissions"
            />

            <StatCard
              value="100%"
              title="Passion"
            />

          </div>

        </div>

      </Container>

    </section>
  );
}
