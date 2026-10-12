import { Chip } from "./Chip.tsx";

type CodeBoxProps = {
  readonly code: string;
  readonly language: string;
};

export function CodeBox({ code, language }: CodeBoxProps) {
  const lines = code.split("\n");
  const count = `${lines.length} ${lines.length === 1 ? "ligne" : "lignes"}`;

  return (
    <div
      role='region'
      aria-label={`Exemple de code ${language}, ${count}`}
      className='w-full'
    >
      <div className='flex items-center justify-between rounded-t-lg bg-code-header px-3 py-2'>
        <Chip tone='topic'>{language}</Chip>
        <span className='text-xs text-code-muted'>{count}</span>
      </div>
      <pre className='rounded-b-lg bg-ink p-3 font-mono text-xs leading-relaxed font-medium text-paper lg:text-sm'>
        <code>
          {lines.map((line, index) => (
            <span
              key={index}
              className='flex gap-3'
            >
              <span
                aria-hidden='true'
                className='w-4 shrink-0 text-right text-code-muted select-none'
              >
                {index + 1}
              </span>
              <span className='whitespace-pre-wrap'>{line}</span>
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
