const tones = {
  neutral: "bg-chip px-3",
  stat: "bg-card px-2",
} as const;

type ChipProps = {
  readonly tone: keyof typeof tones;
  readonly className?: string;
  readonly children: string;
};

// className is for placement only: with no class-merge helper, conflicting
// classes would resolve by stylesheet order, not by their order in the string.
export function Chip({ tone, className = "", children }: ChipProps) {
  return (
    <span
      className={`rounded-full text-xs font-bold border-sticker ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
