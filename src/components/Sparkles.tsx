const sparkles = [
  "left-[-33%] top-[16%] text-action [animation-delay:900ms]",
  "left-[130%] top-[44%] text-react [animation-delay:1000ms]",
  "left-[-11%] top-[120%] text-js [animation-delay:1100ms]",
] as const;

export function Sparkles() {
  return (
    <div aria-hidden='true'>
      {sparkles.map((place) => (
        <svg
          key={place}
          viewBox='0 0 24 24'
          fill='currentColor'
          className={`absolute -mt-2 -ml-2 size-4 animate-sparkle opacity-0 ${place}`}
        >
          <path d='M12 0C12.8 7 17 11.2 24 12C17 12.8 12.8 17 12 24C11.2 17 7 12.8 0 12C7 11.2 11.2 7 12 0Z' />
        </svg>
      ))}
    </div>
  );
}
