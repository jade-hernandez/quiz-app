import { Chip } from "../../ui/Chip.tsx";
import { Logo } from "../../ui/Logo.tsx";
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
      <div className='flex flex-col gap-3 md:mt-21 md:gap-8 lg:mt-0'>
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
      <p className='mt-auto text-center text-xs text-muted'>
        Sans compte · tes scores restent sur ton appareil
      </p>
    </main>
  );
}
