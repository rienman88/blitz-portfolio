import AtmosphereGlow from "./AtmosphereGlow";
import CircuitLines from "./CircuitLines";
import ElectronOrbit from "./ElectronOrbit";
import GroundRing from "./GroundRing";
import LightningRays from "./LightningRays";
import ParticleField from "./ParticleField";
import PlanetHorizon from "./PlanetHorizon";
import StarField from "./StarField";

export default function HorizonScene() {
  return (
    <div
      className="
      pointer-events-none
      absolute
      inset-x-0
      bottom-0
      h-[450px]
      overflow-hidden
      "
    >
      {/* atmosphere */}
      <div
        className="
        absolute
        bottom-0
        left-1/2
        -translate-x-1/2

        w-[2000px]
        h-[600px]

        rounded-full

        bg-cyan-400/10

        blur-[150px]
        "
      />

      {/* planet */}
      <div
        className="
        absolute
        left-1/2
        -translate-x-1/2

        bottom-[-1200px]

        w-[2600px]
        h-[2600px]

        rounded-full

        border-t
        border-cyan-300/70

        shadow-[0_0_120px_rgba(34,211,238,.9)]
        "
      />

      {/* bright center */}
      <div
        className="
        absolute
        left-1/2
        bottom-0

        -translate-x-1/2

        w-[1000px]
        h-[120px]

        bg-cyan-400/30

        blur-[80px]
        "
      />
    </div>
  );
}
