type AuraIconProps = {
  size?: number;
  strokeWidth?: number;
  cornerLength?: number;
  dotRadius?: number;
  cornerColor?: string;
  dotColor?: string;
};

export default function AuraIcon({
  size = 100,
  strokeWidth = 6,
  cornerLength = 26,
  dotRadius = 17,
  cornerColor = "#080B0D",
  dotColor = "#006064",
}: AuraIconProps) {
  const margin = 8;
  const end = 100 - margin;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Isotipo MyAura"
    >
      {/* Esquina superior izquierda */}
      <path
        d={`M ${margin + cornerLength} ${margin}
            H ${margin}
            V ${margin + cornerLength}`}
        stroke={cornerColor}
        strokeWidth={strokeWidth}
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />

      {/* Esquina superior derecha */}
      <path
        d={`M ${end - cornerLength} ${margin}
            H ${end}
            V ${margin + cornerLength}`}
        stroke={cornerColor}
        strokeWidth={strokeWidth}
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />

      {/* Esquina inferior izquierda */}
      <path
        d={`M ${margin} ${end - cornerLength}
            V ${end}
            H ${margin + cornerLength}`}
        stroke={cornerColor}
        strokeWidth={strokeWidth}
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />

      {/* Esquina inferior derecha */}
      <path
        d={`M ${end - cornerLength} ${end}
            H ${end}
            V ${end - cornerLength}`}
        stroke={cornerColor}
        strokeWidth={strokeWidth}
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />

      {/* Círculo central */}
      <circle
        cx="50"
        cy="50"
        r={dotRadius}
        fill={dotColor}
      />
    </svg>
  );
}