import { BackButton } from "../../ui/BackButton.tsx";
import { Logo } from "../../ui/Logo.tsx";
import { SectionRow } from "./SectionRow.tsx";
import { sectionsOfTopic } from "../../domain/sections.ts";
import type { Section, TopicId } from "../../domain/sections.ts";

type SectionsProps = {
  readonly topic: TopicId;
  readonly onBack: () => void;
  readonly onSelectSection: (section: Section) => void;
};

export function Sections({ topic, onBack, onSelectSection }: SectionsProps) {
  return (
    <main
      data-topic={topic}
      className='mx-auto flex min-h-dvh w-full max-w-160 flex-col gap-3 p-4 lg:max-w-240 lg:p-10'
    >
      <header className='hidden lg:mb-9 lg:flex'>
        <Logo />
      </header>
      <div className='flex'>
        <BackButton
          label="Retour à l'accueil"
          showLabel
          onClick={onBack}
        />
      </div>
      <h1
        tabIndex={-1}
        className='w-fit display text-2xl leading-display lg:text-4xl'
      >
        Choisis une section
      </h1>
      <ul className='flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-3 lg:grid-cols-3'>
        {sectionsOfTopic(topic).map((section, index) => (
          <li key={section.id}>
            <SectionRow
              number={index + 1}
              label={section.label}
              questionCount={section.questionCount}
              onSelect={() => onSelectSection(section)}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
