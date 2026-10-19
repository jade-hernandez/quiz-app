const spaceBeforePunctuation = / (?=[?!:;])/g;

type InlineTextProps = {
  readonly text: string;
};

export function InlineText({ text }: InlineTextProps) {
  return text.split("`").map((part, index) =>
    index % 2 === 0 ? (
      part.replace(spaceBeforePunctuation, "\u202F")
    ) : (
      <code
        key={index}
        className='rounded-sm bg-ink/9 px-1 font-mono text-[0.8em] font-medium tracking-normal'
      >
        {part}
      </code>
    ),
  );
}
