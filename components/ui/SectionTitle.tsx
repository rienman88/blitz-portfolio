type Props = {
  title: string;
};

export default function SectionTitle({ title }: Props) {
  return (
    <div className="mb-10">
      <h2 className="text-4xl font-bold text-white">
        {title}
      </h2>

      <div className="mt-3 h-[2px] w-28 bg-cyan-500" />
    </div>
  );
}
