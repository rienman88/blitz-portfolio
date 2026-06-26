import Container from "../ui/Container";
import FadeIn from "../ui/FadeIn";

import AdjustableLogo from "../logo/AdjustableLogo";
import HorizonScene from "../ui/HorizonScene";

import { personal } from "@/data/personal";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-16 md:py-20"
    >
      <Container>
        <FadeIn>

          <div
            className="
              grid
              items-center
              gap-8

              grid-cols-[60%_40%]

              md:grid-cols-[58%_42%]

              lg:grid-cols-[56%_44%]

              xl:grid-cols-[55%_45%]
            "
          >

            {/* LEFT */}

            <div>

              <p
                className="
                  mb-3
                  text-xl
                  text-cyan-400

                  sm:text-2xl

                  lg:text-3xl
                "
              >
                Hello, I'm
              </p>

              <h1
                className="
                  font-bold

                  text-4xl

                  sm:text-5xl

                  md:text-6xl

                  lg:text-7xl
                "
              >
                {personal.firstName}
              </h1>

              <h1
                className="
                  mb-5

                  font-bold

                  text-4xl

                  text-blue-500

                  sm:text-5xl

                  md:text-6xl

                  lg:text-7xl
                "
              >
                {personal.lastName}
              </h1>

              <h2
                className="
                  mb-5

                  text-xl

                  text-gray-200

                  sm:text-2xl

                  lg:text-3xl
                "
              >
                {personal.title}
              </h2>

              <p
                className="
                  max-w-2xl

                  text-base

                  text-gray-400

                  sm:text-lg

                  lg:text-xl
                "
              >
                {personal.shortDescription}
              </p>

              <p
                className="
                  mt-6

                  text-sm

                  text-gray-400

                  sm:text-base

                  lg:text-lg
                "
              >
                {personal.about}
              </p>

            </div>

            {/* RIGHT */}

            <div
              className="
                relative

                flex
                items-center
                justify-center

                h-[280px]

                sm:h-[360px]

                md:h-[460px]

                lg:h-[560px]

                xl:h-[620px]

                overflow-visible
              "
            >

              <div
                className="
                  relative
                  z-10

                  top-6

                  sm:top-8

                  md:top-10

                  lg:top-12
                "
              >

                <div
                  className="
                    w-[180px]

                    sm:w-[250px]

                    md:w-[360px]

                    lg:w-[500px]

                    xl:w-[650px]
                  "
                >
                  <AdjustableLogo
                    src="/logo/blitz.png"
                    size={650}
                  />
                </div>

              </div>

            </div>

          </div>

        </FadeIn>
      </Container>

      <HorizonScene />

    </section>
  );
}
