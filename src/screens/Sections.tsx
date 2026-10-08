import { BackButton } from "../components/BackButton.tsx";
import { Chip } from "../components/Chip.tsx";
import type { TopicId } from "../domain/sections.ts";
import { topics } from "../domain/topics.ts";

type SectionsProps = {
  readonly topic: TopicId;
  readonly onBack: () => void;
};

export function Sections({ topic, onBack }: SectionsProps) {
  return (
    <main className='mx-auto flex min-h-dvh w-full max-w-160 flex-col gap-3 p-4 lg:max-w-240 lg:p-10'>
      <div className='flex items-center gap-3'>
        <BackButton
          label='Retour aux sujets'
          onClick={onBack}
        />
        <Chip tone='neutral'>{topics[topic].title}</Chip>
      </div>
      <h1
        tabIndex={-1}
        className='display text-2xl leading-display lg:text-4xl'
      >
        Choisis une section
      </h1>
    </main>
  );
}
