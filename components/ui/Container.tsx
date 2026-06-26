type Props = {
  children: React.ReactNode;
};

export default function Container({
  children,
}: Props) {
  return (
    <div
      className="
        mx-auto

        w-full

        max-w-screen-2xl

        px-6

        lg:px-10

        xl:px-14
      "
    >
      {children}
    </div>
  );
}
