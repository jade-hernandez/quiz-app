import { themeStyles } from "../data/theme-styles";
import type { QuizId } from "../types";
import { cn } from "../utils/utils";
import { Button } from "./Button";

type ScoreScreenProps = {
  score: number;
  theme: QuizId;
  totalQuestions: number;
  onExit: () => void;
};

function ScoreScreen({ score, totalQuestions, theme, onExit }: ScoreScreenProps) {
  const styles = themeStyles[theme];
  return (
    <div className='flex flex-col items-center gap-4'>
      <h2 className='text-2xl font-bold text-neutral-900'>Résultat</h2>
      <p className='text-lg text-neutral-700'>
        Tu as obtenu un score de {score} sur {totalQuestions}.
      </p>
      <Button
        onClick={onExit}
        className={cn("mt-4", styles.button, styles.outline)}
      >
        Retour à l'accueil
      </Button>
    </div>
  );
}

export { ScoreScreen };
