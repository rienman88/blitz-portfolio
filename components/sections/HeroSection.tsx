import Container from "../ui/Container";
import FadeIn from "../ui/FadeIn";

import AdjustableLogo from "../logo/AdjustableLogo";
import HorizonScene from "../ui/HorizonScene";

import { personal } from "@/data/personal";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-20 pb-12 lg:pt-28 lg:pb-20"
    >
      {/* Background Scene */}
      <HorizonScene />

      <Container>
        <FadeIn>
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* LEFT SIDE */}

            <div className="relative z-10">

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
                  leading-tight

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
                  leading-tight

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

            {/* RIGHT SIDE */}

            <div
              className="
                relative
                z-10

                flex
                justify-center

                mt-6

                lg:mt-0
              "
            >

              <div
                className="
                  w-full

                  max-w-[260px]

                  sm:max-w-[360px]

                  md:max-w-[480px]

                  lg:max-w-[620px]

                  xl:max-w-[720px]
                "
              >
                <AdjustableLogo
                  src="/logo/blitz.png"
                  size={720}
                />
              </div>

            </div>

          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
