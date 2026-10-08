import type { TopicId } from "../domain/sections.ts";
import type { Topic } from "../domain/topics.ts";
import { Chip } from "./Chip.tsx";
import { Icon } from "./Icon.tsx";

// Full class names, not built from the id, so Tailwind can see them.
const backgrounds: Record<TopicId, string> = {
  javascript: "bg-js",
  react: "bg-react",
};

type TopicCardProps = {
  readonly topic: Topic;
  readonly questionCount: number;
  readonly sectionCount: number;
};

export function TopicCard({
  topic,
  questionCount,
  sectionCount,
}: TopicCardProps) {
  return (
    <button
      type='button'
      className={`group flex flex-col gap-1 rounded-xl px-4 py-3 text-left shadow-sticker transition-[translate,box-shadow] duration-100 ease-out border-sticker hover:-translate-px hover:shadow-sticker-lift active:translate-0.5 active:shadow-none active:duration-75 ${backgrounds[topic.id]}`}
    >
      <span className='flex items-center justify-between'>
        <span className='display text-2xl leading-display lg:text-3xl'>
          {topic.title}
        </span>
        <span className='grid size-8 place-items-center rounded-full bg-card text-lg transition-transform duration-100 ease-out border-sticker group-hover:translate-x-0.5'>
          <Icon name='arrow-right' />
        </span>
      </span>
      <span className='text-sm lg:text-base'>{topic.description}</span>
      <span className='mt-1 flex gap-2'>
        <Chip tone='stat'>{`${questionCount} questions`}</Chip>
        <Chip tone='stat'>{`${sectionCount} sections`}</Chip>
      </span>
    </button>
  );
}
