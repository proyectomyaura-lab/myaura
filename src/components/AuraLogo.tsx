import AuraIcon from "./AuraIcon";

type AuraLogoProps = {
  variant?: "vertical" | "horizontal" | "icon";
  size?: number;
  color?: string;
};

export default function AuraLogo({
  variant = "vertical",
  size = 200,
  color = "#080B0D",
}: AuraLogoProps) {
  if (variant === "icon") {
    return <AuraIcon size={size} cornerColor={color} />;
  }

  const horizontal = variant === "horizontal";

  return (
    <div
      className={`flex items-center justify-center ${
        horizontal ? "flex-row" : "flex-col"
      }`}
      style={{ gap: horizontal ? size * 0.08 : size * 0.06 }}
    >
      <AuraIcon size={size} cornerColor={color} />

      <span
        className="font-bold tracking-tight whitespace-nowrap"
        style={{
          fontFamily: "var(--font-nunito)",
          fontSize: size * 0.36,
          lineHeight: 1,
          color,
        }}
      >
        myAura
      </span>
    </div>
  );
}