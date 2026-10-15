export type SegmentResult = "correct" | "incorrect" | "current" | "todo";

type ProgressProps = {
  readonly results: readonly SegmentResult[];
  readonly position: number;
};

const fills = {
  correct: "scale-x-100 bg-correct",
  incorrect: "scale-x-100 bg-incorrect",
  current: "scale-x-100 bg-ink",
  todo: "scale-x-0 bg-ink",
} as const;

export function Progress({ results, position }: ProgressProps) {
  return (
    <div className='flex items-center gap-3'>
      <div
        role='progressbar'
        aria-valuenow={position + 1}
        aria-valuemin={1}
        aria-valuemax={results.length}
        aria-label={`Question ${position + 1} sur ${results.length}`}
        className='flex flex-1 gap-1'
      >
        {results.map((result, index) => (
          <span
            key={index}
            className='h-2 flex-1 overflow-hidden rounded-sm bg-card border-sticker'
          >
            <span
              className={`block size-full origin-left transition-[scale,background-color] duration-220 ease-out ${fills[result]}`}
            />
          </span>
        ))}
      </div>
      <span
        aria-hidden='true'
        className='w-10 text-right font-mono text-xs font-medium'
      >{`${position + 1}/${results.length}`}</span>
    </div>
  );
}
