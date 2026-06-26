type Props = {
  value: string;
  title: string;
};

export default function StatCard({
  value,
  title,
}: Props) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-6xl font-bold text-white">
        {value}
      </h3>

      <p className="mt-3 text-gray-400">
        {title}
      </p>
    </div>
  );
}
