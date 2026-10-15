type ProgressProps = {
  readonly current: number;
  readonly total: number;
};

function fillOf(position: number, current: number): string {
  if (position < current) return "scale-x-100 bg-accent";
  if (position === current) return "scale-x-100 bg-ink";
  return "scale-x-0 bg-ink";
}

export function Progress({ current, total }: ProgressProps) {
  return (
    <div className='flex items-center gap-3'>
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
            className='h-2 flex-1 overflow-hidden rounded-sm bg-card border-sticker'
          >
            <span
              className={`block size-full origin-left transition-[scale,background-color] duration-220 ease-out ${fillOf(index + 1, current)}`}
            />
          </span>
        ))}
      </div>
      <span
        aria-hidden='true'
        className='w-10 text-right font-mono text-xs font-medium'
      >{`${current}/${total}`}</span>
    </div>
  );
}
