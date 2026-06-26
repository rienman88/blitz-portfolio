import Container from "../ui/Container";
import FadeIn from "../ui/FadeIn";

import AdjustableLogo from "../logo/AdjustableLogo";
import HorizonScene from "../ui/HorizonScene";

import { personal } from "@/data/personal";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden

        pt-24
        pb-20
      "
    >
      <HorizonScene />

      <Container>

        <FadeIn>

          <div
            className="
              relative

              min-h-[720px]

              lg:min-h-[820px]

              flex

              flex-col

              lg:flex-row

              items-center

              justify-between

              gap-16
            "
          >

            {/* LOGO */}

            <div
              className="
                absolute

                left-1/2

                top-1/2

                -translate-x-1/2

                -translate-y-[42%]

                pointer-events-none

                opacity-90

                z-0
              "
            >

              <AdjustableLogo
                src="/logo/blitz.png"
                className="
                  w-[260px]

                  sm:w-[360px]

                  md:w-[500px]

                  lg:w-[720px]

                  xl:w-[900px]

                  2xl:w-[1050px]
                "
              />

            </div>

            {/* TEXT */}

            <div
              className="
                relative

                z-10

                max-w-3xl
              "
            >

              <p
                className="
                  mb-4

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

                  leading-none

                  text-5xl

                  sm:text-6xl

                  lg:text-7xl
                "
              >
                {personal.firstName}
              </h1>

              <h1
                className="
                  mb-6

                  font-bold

                  leading-none

                  text-5xl

                  text-blue-500

                  sm:text-6xl

                  lg:text-7xl
                "
              >
                {personal.lastName}
              </h1>

              <h2
                className="
                  mb-6

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

                  text-gray-300

                  sm:text-lg

                  lg:text-xl
                "
              >
                {personal.shortDescription}
              </p>

              <p
                className="
                  mt-6

                  max-w-2xl

                  text-sm

                  text-gray-400

                  sm:text-base

                  lg:text-lg
                "
              >
                {personal.about}
              </p>

            </div>

          </div>

        </FadeIn>

      </Container>

    </section>
  );
}
