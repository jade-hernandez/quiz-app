import { Button } from "./Button";

type ScoreScreenProps = {
  score: number;
  totalQuestions: number;
  onExit: () => void;
};

function ScoreScreen({ score, totalQuestions, onExit }: ScoreScreenProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold text-neutral-900">Résultat</h2>
      <p className="text-lg text-neutral-700">
        Tu as obtenu un score de {score} sur {totalQuestions}.
      </p>
      <Button onClick={onExit} className="mt-4">
        Retour à l'accueil
      </Button>
    </div>
  );
}

export { ScoreScreen };
