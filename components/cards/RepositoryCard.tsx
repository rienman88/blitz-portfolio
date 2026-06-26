import ProjectWatermark from "../ui/ProjectWatermark";

type Props = {
  name: string;

  description: string;

  language: string;

  updated: string;

  url: string;

  logo: string;
};

export default function RepositoryCard({
  name,
  description,
  language,
  updated,
  url,
  logo,
}: Props) {
  return (
    <a
      href={url}
      target="_blank"
      className="
      relative

      block

      overflow-hidden

      rounded-3xl

      border
      border-cyan-500/10

      bg-[#071126]

      p-6

      hover:border-cyan-500/20

      transition
      "
    >
      <ProjectWatermark
        src={logo}
      />

      <div className="relative z-10">

        <h3
          className="
          mb-4

          text-2xl
          font-bold
          text-white
          "
        >
          {name}
        </h3>

        <p
          className="
          mb-5

          text-gray-300
          "
        >
          {description}
        </p>

        <div
          className="
          flex
          justify-between

          text-cyan-400
          "
        >
          <span>{language}</span>

          <span>{updated}</span>
        </div>

      </div>
    </a>
  );
}
