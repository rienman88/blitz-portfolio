import { Hackathon } from "@/types/hackathon";

type Props = {
  hackathon: Hackathon;
};

export default function HackathonCard({
  hackathon,
}: Props) {
  return (
    <div
      className="
      relative

      pl-12
      pb-12
      "
    >
      {/* Timeline Dot */}

      <div
        className="
        absolute

        left-0
        top-2

        h-4
        w-4

        rounded-full

        bg-cyan-400

        shadow-[0_0_20px_rgba(34,211,238,.8)]
        "
      />

      {/* Timeline Line */}

      <div
        className="
        absolute

        left-[7px]
        top-6

        h-full
        w-[2px]

        bg-cyan-500/20
        "
      />

      <p
        className="
        mb-2

        text-sm

        uppercase
        tracking-wider

        text-cyan-400
        "
      >
        {hackathon.date}
      </p>

      <h3
        className="
        mb-2

        text-3xl
        font-bold
        "
      >
        {hackathon.name}
      </h3>

      <p
        className="
        mb-3

        text-xl

        text-white
        "
      >
        {hackathon.project}
      </p>

      <p className="mb-5 text-gray-400">
        {hackathon.builder}
      </p>

      <div className="flex gap-6">

        <a
          href={hackathon.url}
          target="_blank"
          className="text-cyan-400"
        >
          Event →
        </a>

        <a
          href={hackathon.entryUrl}
          target="_blank"
          className="text-cyan-400"
        >
          Submission →
        </a>

      </div>
    </div>
  );
}
