export default function ElectronOrbit() {
  return (
    <div
      className="
      absolute

      left-1/2
      top-[35%]

      -translate-x-1/2

      w-[900px]
      h-[900px]

      rounded-full

      border
      border-cyan-500/10

      animate-spin
      "
      style={{
        animationDuration: "80s",
      }}
    />
  );
}
