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
  trophy: [
    "M8 21l8 0",
    "M12 17l0 4",
    "M7 4l10 0",
    "M17 4v8a5 5 0 0 1 -10 0v-8",
    "M3 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
    "M17 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
  ],
  "thumb-up": [
    "M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3",
  ],
  "plant-2": [
    "M2 9a10 10 0 1 0 20 0",
    "M12 19a10 10 0 0 1 10 -10",
    "M2 9a10 10 0 0 1 10 10",
    "M12 4a9.7 9.7 0 0 1 2.99 7.5",
    "M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5",
  ],
} as const;

export type IconName = keyof typeof paths;

type IconProps = { readonly name: IconName };

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
