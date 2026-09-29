import { themeStyles } from "../data/theme-styles";
import type { QuizId } from "../types";
import { cn } from "../utils/utils";

type QuizCardProps = {
  emoji: string;
  title: string;
  questionCount: number;
  description: string;
  theme: QuizId;
  onClick: () => void;
};

function QuizCard({ emoji, title, questionCount, description, theme, onClick }: QuizCardProps) {
  const styles = themeStyles[theme];

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex cursor-pointer flex-col gap-4 rounded-2xl border border-neutral-200 p-5 text-left transition-colors hover:border-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2",
        styles.cardHover,
        styles.outline,
      )}
    >
      <div className='flex items-center justify-between'>
        <span className='text-2xl'>{emoji}</span>
        <span className='text-xs font-medium text-neutral-400'>{questionCount} questions</span>
      </div>

      <div className='flex flex-col gap-1'>
        <div className={cn("font-display text-lg font-bold", styles.text)}>{title}</div>
        <p className='text-sm text-neutral-500'>{description}</p>
      </div>

      <span className={cn("text-sm font-semibold", styles.text)}>Commencer →</span>
    </button>
  );
}

export { QuizCard };
export type { QuizCardProps };
