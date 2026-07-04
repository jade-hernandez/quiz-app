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
      <button
        onClick={onExit}
        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Retour à l'accueil
      </button>
    </div>
  );
}

export { ScoreScreen };
