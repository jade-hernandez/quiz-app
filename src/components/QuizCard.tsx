import { themeStyles } from "../data/theme-styles";
import type { QuizId, Section } from "../types";
import { cn } from "../utils/utils";
import { Button } from "./Button";

type QuizCardProps = {
  title: string;
  description: string;
  questionCount: number;
  themeSections: Section[];
  theme: QuizId;
  onClick: () => void;
};

function QuizCard({
  title,
  description,
  questionCount,
  themeSections,
  theme,
  onClick,
}: QuizCardProps) {
  const styles = themeStyles[theme];

  return (
    <article className={cn("flex flex-col gap-5 rounded-3xl border p-8", styles.panel)}>
      <div className='flex flex-wrap items-baseline justify-between gap-2'>
        <h3 className={cn("font-display text-3xl font-extrabold", styles.heading)}>{title}</h3>
        <p className={cn("text-sm font-semibold", styles.heading)}>
          {questionCount} questions · {themeSections.length} sections
        </p>
      </div>

      <p className='text-neutral-700'>{description}</p>

      <ul
        role='list'
        className='flex flex-wrap gap-2'
      >
        {themeSections.map(section => (
          <li
            key={section.id}
            className={cn(
              "rounded-full border bg-white px-3.5 py-1 text-sm font-medium",
              styles.chip,
            )}
          >
            {section.label}
          </li>
        ))}
      </ul>

      <Button
        onClick={onClick}
        className={cn(
          "mt-auto self-start rounded-2xl px-6 py-3.5 text-base text-white",
          styles.buttonStrong,
          styles.outline,
        )}
      >
        Choisir {title}
      </Button>
    </article>
  );
}

export { QuizCard };
export type { QuizCardProps };
