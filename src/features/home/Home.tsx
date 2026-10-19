import { Chip } from "../../ui/Chip.tsx";
import { ImageWithPlaceholder } from "../../ui/ImageWithPlaceholder.tsx";
import { Logo } from "../../ui/Logo.tsx";
import { questionCardBlur } from "./images/blur-data.ts";
import questionCard from "./images/question-card.webp";
import { TopicCard } from "./TopicCard.tsx";
import {
  questionCountOfTopic,
  sectionsOfTopic,
} from "../../domain/sections.ts";
import type { TopicId } from "../../domain/sections.ts";
import { topics } from "../../domain/topics.ts";

type HomeProps = { readonly onSelectTopic: (topic: TopicId) => void };

export function Home({ onSelectTopic }: HomeProps) {
  return (
    <main className='mx-auto flex min-h-dvh w-full max-w-160 flex-col gap-3 p-4 lg:max-w-260 lg:p-10'>
      <div className='flex flex-col gap-3 md:mt-21 md:gap-8'>
        <header className='flex'>
          <Logo />
        </header>
        <div className='lg:flex lg:items-center lg:gap-8'>
          <div className='flex flex-col gap-3 lg:w-lg lg:shrink-0'>
            <Chip
              tone='neutral'
              className='self-start'
            >
              JavaScript et React · en français
            </Chip>
            <h1
              tabIndex={-1}
              className='w-fit display text-3xl leading-display md:text-4xl lg:text-6xl'
            >
              Révise JavaScript et React,{" "}
              <span className='rounded-lg bg-js box-decoration-clone px-1'>
                une question à&nbsp;la&nbsp;fois.
              </span>
            </h1>
            <p className='text-sm md:text-base'>
              Des questions corrigées et expliquées pour consolider les bases.
            </p>
          </div>
          <div className='hidden min-w-0 flex-1 lg:block'>
            <ImageWithPlaceholder
              src={questionCard}
              placeholder={questionCardBlur}
              width={400}
              height={305}
            />
          </div>
        </div>
        <h2 className='display text-lg leading-display md:text-2xl'>
          Choisis ton sujet
        </h2>
        <div className='grid gap-3 lg:grid-cols-2'>
          {Object.values(topics).map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              questionCount={questionCountOfTopic(topic.id)}
              sectionCount={sectionsOfTopic(topic.id).length}
              onSelect={() => onSelectTopic(topic.id)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
