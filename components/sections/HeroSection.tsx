import Container from "../ui/Container";
import FadeIn from "../ui/FadeIn";

import AdjustableLogo from "../logo/AdjustableLogo";
import HorizonScene from "../ui/HorizonScene";

import { personal } from "@/data/personal";

export default function HeroSection() {
  return (
	<section
	  id="home"
	  className="relative overflow-hidden py-20"
	>
      <Container>

        <FadeIn>

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* LEFT */}
            <div>

              <p className="mb-4 text-3xl text-cyan-400">
                Hello, I'm
              </p>

              <h1 className="text-7xl font-bold">
                {personal.firstName}
              </h1>

              <h1 className="mb-8 text-7xl font-bold text-blue-500">
                {personal.lastName}
              </h1>

              <h2 className="mb-6 text-3xl text-gray-200">
                {personal.title}
              </h2>

              <p className="max-w-2xl text-xl text-gray-400">
                {personal.shortDescription}
              </p>

              <p className="mt-6 text-gray-400">
                {personal.about}
              </p>

            </div>

		<div
		  className="
		  relative

		  flex
		  items-center
		  justify-center

		  h-[570px]
		  overflow-visible
		  "
		>

		  <div
		    className="
		    relative
		    z-10
		    
		    top-[35px]
		    bottom-[0px]
		    "
		  >
		    <AdjustableLogo
		      src="/logo/blitz.png"
		      size={990}
		    />
		  </div>

		</div>
          </div>

        </FadeIn>

      </Container>
      <HorizonScene />
      
    </section>
  );
}
