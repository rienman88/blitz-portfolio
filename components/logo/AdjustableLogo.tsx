import Image from "next/image";

type AdjustableLogoProps = {
  src: string;
  className?: string;
};

export default function AdjustableLogo({
  src,
  className = "",
}: AdjustableLogoProps) {
  return (
    <div
      className={`
        relative
        aspect-square
        w-full
        ${className}
      `}
    >
      <Image
        src={src}
        alt="Blitz Logo"
        fill
        priority
        className="object-contain"
      />
    </div>
  );
}
