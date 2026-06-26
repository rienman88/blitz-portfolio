import Image from "next/image";

type Props = {
  src: string;
  size?: number;
};

export default function ProjectWatermark({
  src,
  size = 180,
}: Props) {
  return (
    <div
      className="
      absolute
      inset-0

      flex
      items-center
      justify-center

      pointer-events-none
      "
    >
      <Image
        src={src}
        alt=""
        width={size}
        height={size}
        className="
        opacity-[0.20]
        object-contain
        "
      />
    </div>
  );
}
