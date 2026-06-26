type Props = {
  title: string;
  skills: string[];
};

export default function SkillCategoryCard({
  title,
  skills,
}: Props) {
  return (
    <div
      className="
      rounded-3xl

      border
      border-cyan-500/10

      bg-[#071126]

      p-8

      transition-all
      duration-300

      hover:border-cyan-500/20
      hover:shadow-[0_0_30px_rgba(34,211,238,.08)]
      "
    >
      <h3
        className="
        mb-6

        text-2xl
        font-bold

        text-white
        "
      >
        {title}
      </h3>

      <div
        className="
        flex
        flex-wrap
        gap-3
        "
      >
        {skills.map((skill) => (
          <span
            key={skill}
            className="
            rounded-xl

            border
            border-blue-500/30

            bg-blue-500/5

            px-4
            py-2

            text-sm

            text-cyan-300
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
