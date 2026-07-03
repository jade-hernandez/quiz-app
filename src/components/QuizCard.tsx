type QuizCardProps = {
  emoji: string;
  title: string;
  questionCount: number;
  description: string;
  color: "amber" | "blue";
  onClick: () => void;
};

const colorStyles = {
  amber: {
    title: "font-display text-lg font-bold text-amber-600",
    cta: "text-sm font-semibold text-amber-600",
  },
  blue: {
    title: "font-display text-lg font-bold text-blue-600",
    cta: "text-sm font-semibold text-blue-600",
  },
};

function QuizCard({
  emoji,
  title,
  questionCount,
  description,
  color,
  onClick,
}: QuizCardProps) {
  const styles = colorStyles[color];

  return (
    <button
      onClick={onClick}
      className="flex flex-col gap-4 rounded-2xl border border-neutral-200 p-5 text-left transition-colors hover:border-neutral-400"
    >
      <div className="flex items-center justify-between">
        <span className="text-2xl">{emoji}</span>
        <span className="text-xs font-medium text-neutral-400">
          {questionCount} questions
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <div className={styles.title}>{title}</div>
        <p className="text-sm text-neutral-500">{description}</p>
      </div>

      <span className={styles.cta}>Commencer →</span>
    </button>
  );
}

export { QuizCard };
export type { QuizCardProps };
