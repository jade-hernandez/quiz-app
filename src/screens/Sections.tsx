import { BackButton } from "../components/BackButton.tsx";
import { Chip } from "../components/Chip.tsx";
import { SectionRow } from "../components/SectionRow.tsx";
import { questionsOfSection, sectionsOfTopic } from "../data/queries.ts";
import type { TopicId } from "../domain/sections.ts";
import { topics } from "../domain/topics.ts";

type SectionsProps = {
  readonly topic: TopicId;
  readonly onBack: () => void;
};

export function Sections({ topic, onBack }: SectionsProps) {
  return (
    <main
      data-topic={topic}
      className='mx-auto flex min-h-dvh w-full max-w-160 flex-col gap-3 p-4 lg:max-w-240 lg:p-10'
    >
      <div className='flex items-center gap-3'>
        <BackButton
          label='Retour aux sujets'
          onClick={onBack}
        />
        <Chip tone='topic'>{topics[topic].title}</Chip>
      </div>
      <div>
        <h1
          tabIndex={-1}
          className='w-fit display text-2xl leading-display lg:text-4xl'
        >
          Choisis une section
        </h1>
        <p className='mt-1 text-sm text-muted lg:text-base'>
          Dans l'ordre que tu veux.
        </p>
      </div>
      <ul className='flex flex-col gap-2'>
        {sectionsOfTopic(topic).map((section, index) => (
          <li key={section.id}>
            <SectionRow
              number={index + 1}
              label={section.label}
              questionCount={questionsOfSection(section.id).length}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
