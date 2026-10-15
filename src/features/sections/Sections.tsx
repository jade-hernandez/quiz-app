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
      className='mx-auto flex min-h-dvh w-full max-w-160 flex-col p-4 lg:max-w-236 lg:p-10'
    >
      <div className='flex flex-col gap-6 md:mt-36 md:gap-8 lg:mt-26'>
        <header className='hidden lg:flex'>
          <Logo />
        </header>
        <div className='flex'>
          <BackButton
            label="Retour à l'accueil"
            onClick={onBack}
          />
        </div>
        <h1
          tabIndex={-1}
          className='w-fit display text-2xl leading-display lg:text-4xl'
        >
          Choisis une section
        </h1>
        <ul className='flex flex-col gap-2 md:flex-row md:flex-wrap md:gap-6'>
          {sectionsOfTopic(topic).map((section, index) => (
            <li
              key={section.id}
              className='md:w-73 lg:w-68'
            >
              <SectionRow
                number={index + 1}
                label={section.label}
                questionCount={section.questionCount}
                onSelect={() => onSelectSection(section)}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
