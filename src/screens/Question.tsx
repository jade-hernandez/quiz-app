import { BackButton } from "../components/BackButton.tsx";
import type { Section } from "../domain/sections.ts";

type QuestionProps = {
  readonly section: Section;
  readonly onBack: () => void;
};

export function Question({ section, onBack }: QuestionProps) {
  return (
    <main
      data-topic={section.topic}
      className='mx-auto flex min-h-dvh w-full max-w-160 flex-col gap-3 p-4 lg:max-w-240 lg:p-10'
    >
      <div className='flex items-center gap-3'>
        <BackButton
          label='Retour aux sections'
          onClick={onBack}
        />
      </div>
      <h1
        tabIndex={-1}
        className='w-fit display text-2xl leading-display lg:text-4xl'
      >
        {section.label}
      </h1>
    </main>
  );
}
