const paths = {
  "arrow-left": ["M5 12l14 0", "M5 12l6 6", "M5 12l6 -6"],
  "arrow-right": ["M5 12l14 0", "M13 18l6 -6", "M13 6l6 6"],
  "chevron-right": ["M9 6l6 6l-6 6"],
  check: ["M5 12l5 5l10 -10"],
  x: ["M18 6l-12 12", "M6 6l12 12"],
  "text-wrap": [
    "M4 6l16 0",
    "M4 18l5 0",
    "M4 12h13a3 3 0 0 1 0 6h-4l2 -2m0 4l-2 -2",
  ],
  "arrows-horizontal": ["M7 8l-4 4l4 4", "M17 8l4 4l-4 4", "M3 12l18 0"],
} as const;

type IconProps = { readonly name: keyof typeof paths };

export function Icon({ name }: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
      className='size-[1em]'
    >
      {paths[name].map((d) => (
        <path
          key={d}
          d={d}
        />
      ))}
    </svg>
  );
}
