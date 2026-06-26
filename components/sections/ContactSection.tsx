import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24"
    >
      <Container>

        <SectionTitle title="Networks & Contact" />

        <div
          className="
          rounded-3xl
          border border-cyan-500/10
          bg-slate-900/40
          p-8

          shadow-[0_0_40px_rgba(59,130,246,.08)]
          "
        >

          <h2
            className="
            mb-8
            text-4xl
            font-bold
            text-white
            "
          >
            Let's Connect
          </h2>

          <div className="space-y-6 text-xl">

            <div>

              <span className="text-cyan-400">
                GitHub:
              </span>

              <p className="text-gray-300">
                github.com/rienman88
              </p>

            </div>

            <div>

              <span className="text-cyan-400">
                LinkedIn:
              </span>

              <p className="text-gray-300">
                https://www.linkedin.com/in/rienart-ilagan
              </p>

            </div>

            <div>

              <span className="text-cyan-400">
                Email:
              </span>

              <p className="text-gray-300">
                rienman88@gmail.com
              </p>

            </div>
           
            <div>

              <span className="text-cyan-400">
                Credly:
              </span>

              <p className="text-gray-300">
                https://www.credly.com/users/rienart-ryan-ilagan
              </p>

            </div>
            
          </div>

        </div>

      </Container>
    </section>
  );
}


