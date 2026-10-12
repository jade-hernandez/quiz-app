import { useState } from "react";
import { Chip } from "./Chip.tsx";
import { Icon } from "./Icon.tsx";

type CodeBoxProps = {
  readonly code: string;
  readonly language: string;
};

export function CodeBox({ code, language }: CodeBoxProps) {
  const [wrapped, setWrapped] = useState(true);
  const lines = code.split("\n");
  const count = `${lines.length} ${lines.length === 1 ? "ligne" : "lignes"}`;

  return (
    <div className='w-full'>
      <div className='flex items-center gap-3 rounded-t-lg bg-code-header px-3 py-2'>
        <Chip tone='topic'>{language}</Chip>
        <span className='ml-auto flex items-center gap-2 text-xs text-code-muted'>
          {!wrapped && <Icon name='arrows-horizontal' />}
          {count}
        </span>
        <button
          type='button'
          aria-label='Retour à la ligne'
          aria-pressed={wrapped}
          onClick={() => setWrapped(!wrapped)}
          className={`relative z-10 grid h-5 w-6 place-items-center rounded-lg text-sm after:absolute after:-inset-3 focus-visible:outline-paper ${wrapped ? "bg-paper text-ink" : "text-code-muted"}`}
        >
          <Icon name='text-wrap' />
        </button>
      </div>
      <div className='relative'>
        <pre
          role='region'
          aria-label={`Exemple de code ${language}, ${count}`}
          tabIndex={wrapped ? undefined : 0}
          className={`rounded-b-lg bg-ink p-3 font-mono text-xs leading-relaxed font-medium text-paper lg:text-sm ${wrapped ? "" : "overflow-x-auto"}`}
        >
          <code>
            {lines.map((line, index) => {
              const indent = line.length - line.trimStart().length;
              return (
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
                  <span
                    className={
                      wrapped ? "whitespace-pre-wrap" : "pr-6 whitespace-pre"
                    }
                    style={
                      wrapped
                        ? {
                            paddingLeft: `${indent + 2}ch`,
                            textIndent: `-${indent + 2}ch`,
                          }
                        : undefined
                    }
                  >
                    {line}
                  </span>
                </span>
              );
            })}
          </code>
        </pre>
        {!wrapped && (
          <span
            aria-hidden='true'
            className='pointer-events-none absolute inset-y-0 right-0 w-6 rounded-br-lg bg-linear-to-r from-transparent to-ink'
          />
        )}
      </div>
    </div>
  );
}
