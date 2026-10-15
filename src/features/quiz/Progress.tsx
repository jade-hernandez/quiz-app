export type SegmentResult = "correct" | "incorrect" | "current" | "todo";

type ProgressProps = {
  readonly results: readonly SegmentResult[];
  readonly position: number;
  readonly onSelect: (index: number) => void;
};

const fills = {
  correct: "scale-x-100 bg-correct",
  incorrect: "scale-x-100 bg-incorrect",
  current: "scale-x-100 bg-ink",
  todo: "scale-x-0 bg-ink",
} as const;

const names = {
  correct: "réussie",
  incorrect: "ratée",
  current: "en cours",
  todo: "à venir",
} as const;

export function Progress({ results, position, onSelect }: ProgressProps) {
  return (
    <div className='flex items-center gap-3'>
      <ol
        aria-label='Progression'
        className='flex flex-1 gap-1'
      >
        {results.map((result, index) => (
          <li
            key={index}
            className='-my-2 flex-1'
          >
            <button
              type='button'
              disabled={index === position || result === "todo"}
              aria-current={index === position ? "step" : undefined}
              aria-label={`Question ${index + 1} sur ${results.length}, ${names[result]}`}
              onClick={() => onSelect(index)}
              className='flex h-6 w-full items-center'
            >
              <span className='block h-2 w-full overflow-hidden rounded-sm bg-card border-sticker'>
                <span
                  className={`block size-full origin-left transition-[scale,background-color] duration-220 ease-out ${fills[result]}`}
                />
              </span>
            </button>
          </li>
        ))}
      </ol>
      <span
        aria-hidden='true'
        className='w-10 text-right font-mono text-xs font-medium'
      >{`${position + 1}/${results.length}`}</span>
    </div>
  );
}
