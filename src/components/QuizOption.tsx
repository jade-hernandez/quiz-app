import { cn } from "../utils/utils";

type QuizOptionProps = {
  label: string;
  state: "correct" | "incorrect" | "idle";
  disabled: boolean;
  onClick: () => void;
};

const stateStyles = {
  correct: "border-green-500 bg-green-100",
  incorrect: "border-red-500 bg-red-100",
  idle: "border-neutral-200",
};

function QuizOption({ label, state, disabled, onClick }: QuizOptionProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "rounded-xl border p-3 text-left text-sm hover:border-neutral-400",
        stateStyles[state],
      )}
    >
      {label}
    </button>
  );
}
export { QuizOption };
