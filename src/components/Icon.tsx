const paths = {
  "arrow-right": ["M5 12l14 0", "M13 18l6 -6", "M13 6l6 6"],
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
