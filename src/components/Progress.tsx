type ProgressProps = {
  readonly current: number;
  readonly total: number;
};

function toneOf(position: number, current: number): string {
  if (position < current) return "bg-accent";
  if (position === current) return "bg-ink";
  return "bg-card";
}

export function Progress({ current, total }: ProgressProps) {
  return (
    <div className='flex flex-1 items-center gap-3'>
      <div
        role='progressbar'
        aria-valuenow={current}
        aria-valuemin={1}
        aria-valuemax={total}
        aria-label={`Question ${current} sur ${total}`}
        className='flex flex-1 gap-1'
      >
        {Array.from({ length: total }, (_, index) => (
          <span
            key={index}
            className={`h-2 flex-1 rounded-sm border-sticker ${toneOf(index + 1, current)}`}
          />
        ))}
      </div>
      <span
        aria-hidden='true'
        className='w-10 text-right font-mono text-xs font-medium'
      >{`${current}/${total}`}</span>
    </div>
  );
}
