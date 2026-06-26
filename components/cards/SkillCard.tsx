import Image from "next/image";

type SkillCardProps = {
  title: string;
  image: string;
};

export default function SkillCard({
  title,
  image,
}: SkillCardProps) {
  return (
    <div
      className="
      group

      flex
      min-h-[220px]
      flex-col
      items-center
      justify-center

      transition-all
      duration-500

      hover:bg-slate-900/30
      "
    >

      {/* Icon Circle */}
      <div
        className="
        mb-8

        flex
        h-32
        w-32

        items-center
        justify-center

        rounded-full

        border
        border-cyan-500/20

        bg-blue-500/10

        shadow-[0_0_40px_rgba(59,130,246,.25)]

        transition-all
        duration-500

        group-hover:scale-110

        group-hover:border-cyan-400/50

        group-hover:bg-blue-500/20

        group-hover:shadow-[0_0_80px_rgba(34,211,238,.5)]
        "
      >

        <Image
          src={image}
          alt={title}
          width={80}
          height={80}
          className="
          brightness-150
          contrast-125
          object-contain
          "
        />

      </div>

      {/* Title */}
      <h3
        className="
        text-2xl
        font-semibold
        text-white

        transition-all
        duration-500

        group-hover:text-cyan-300
        "
      >
        {title}
      </h3>

    </div>
  );
}
