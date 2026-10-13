import { Icon } from "./ui/Icon.tsx";
import type { IconName } from "./ui/Icon.tsx";

type TierBadgeProps = {
  readonly icon: IconName;
};

export function TierBadge({ icon }: TierBadgeProps) {
  return (
    <span
      aria-hidden='true'
      className='flex size-11 items-center justify-center rounded-full bg-accent text-xl border-sticker lg:size-13 lg:text-2xl'
    >
      <Icon name={icon} />
    </span>
  );
}
