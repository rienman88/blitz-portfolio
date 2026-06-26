import Image from "next/image";

type AdjustableLogoProps = {
  src: string;
  size: number;
};

export default function AdjustableLogo({
  src,
  size,
}: AdjustableLogoProps) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      className="
      relative
      flex
      items-center
      justify-center
      "
    >
      <Image
        src={src}
        alt="Blitz Logo"
        fill
        priority
        className="
        object-contain
        "
      />
    </div>
  );
}
