type Props = {
  title: string;
  isLast?: boolean;
};

export default function RoadmapCard({
  title,
  isLast = false,
}: Props) {
  return (
    <div
      className="
      relative

      pl-12

      pb-8
      "
    >
      {/* Node */}

      <div
        className="
        absolute

        left-0
        top-3

        h-4
        w-4

        rounded-full

        bg-cyan-400

        shadow-[0_0_20px_rgba(34,211,238,.8)]
        "
      />

      {/* Connector */}

      {!isLast && (
        <div
          className="
          absolute

          left-[7px]
          top-7

          h-full
          w-[2px]

          bg-cyan-500/20
          "
        />
      )}

      {/* Content */}

      <div
        className="
        rounded-2xl

        border
        border-cyan-500/10

        bg-[#071126]

        p-6

        transition

        hover:border-cyan-500/20
        hover:shadow-[0_0_25px_rgba(34,211,238,.08)]
        "
      >
        <h3
          className="
          text-xl
          font-bold
          text-white
          "
        >
          {title}
        </h3>
      </div>
    </div>
  );
}
