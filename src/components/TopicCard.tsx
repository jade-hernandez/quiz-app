import type { TopicId } from "../domain/sections.ts";
import type { Topic } from "../domain/topics.ts";
import { Chip } from "./Chip.tsx";
import { Icon } from "./Icon.tsx";
import { sticker } from "./sticker.ts";

const backgrounds: Record<TopicId, string> = {
  javascript: "bg-js",
  react: "bg-react",
};

type TopicCardProps = {
  readonly topic: Topic;
  readonly questionCount: number;
  readonly sectionCount: number;
  readonly onSelect: () => void;
};

export function TopicCard({
  topic,
  questionCount,
  sectionCount,
  onSelect,
}: TopicCardProps) {
  return (
    <button
      type='button'
      onClick={onSelect}
      className={`${sticker} group flex flex-col gap-1 px-4 py-3 text-left ${backgrounds[topic.id]}`}
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
