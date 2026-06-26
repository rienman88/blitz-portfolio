import Image from "next/image";

import { Certification } from "@/types/certification";

type Props = {
  certification: Certification;
};

export default function CertificationCard({
  certification,
}: Props) {
  return (
    <div
      className="
      flex
      items-center
      justify-between

      rounded-3xl

      border
      border-cyan-500/10

      bg-[#071126]

      p-8

      hover:border-cyan-500/20

      transition
      "
    >
      <div>

        <h3
          className="
          mb-3

          text-3xl
          font-bold
          text-white
          "
        >
          {certification.title}
        </h3>

        <p
          className="
          text-gray-400
          "
        >
          {certification.issuer}
        </p>

      </div>

      <Image
        src={certification.image}
        alt={certification.title}
        width={180}
        height={180}
        className="
        object-contain

        opacity-95
        "
      />

    </div>
  );
}
