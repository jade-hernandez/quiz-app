const radius = 50;
const circumference = 2 * Math.PI * radius;

type ScoreRingProps = {
  readonly percent: number;
  readonly score: number;
  readonly total: number;
};

export function ScoreRing({ percent, score, total }: ScoreRingProps) {
  return (
    <div
      role='img'
      aria-label={`Score : ${score} sur ${total}, ${percent} %`}
      className='relative size-41 lg:size-52'
    >
      <svg
        viewBox='0 0 120 120'
        aria-hidden='true'
        className='size-full -rotate-90'
      >
        <circle
          cx='60'
          cy='60'
          r={radius}
          fill='none'
          strokeWidth='13'
          className='stroke-ink'
        />
        <circle
          cx='60'
          cy='60'
          r={radius}
          fill='none'
          strokeWidth='10'
          className='stroke-paper'
        />
        {percent > 0 && (
          <circle
            cx='60'
            cy='60'
            r={radius}
            fill='none'
            strokeWidth='10'
            strokeLinecap='round'
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - percent / 100)}
            className='stroke-accent'
          />
        )}
      </svg>
      <div
        aria-hidden='true'
        className='absolute inset-0 grid place-content-center text-center'
      >
        <span
          className={`display leading-none ${percent === 100 ? "text-3xl lg:text-4xl" : "text-4xl lg:text-5xl"}`}
        >
          {percent}&nbsp;%
        </span>
        <span className='mt-1 text-sm font-bold text-muted lg:text-base'>
          {`${score} / ${total}`}
        </span>
      </div>
    </div>
  );
}
