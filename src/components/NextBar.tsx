import type { Ref } from "react";
import { Button } from "./ui/Button.tsx";

type NextBarProps = {
  readonly ref: Ref<HTMLDivElement>;
  readonly label: string;
  readonly visible: boolean;
  readonly onNext: () => void;
};

export function NextBar({ ref, label, visible, onNext }: NextBarProps) {
  return (
    <div
      ref={ref}
      className={`fixed inset-x-0 bottom-0 border-t-[1.5px] border-ink bg-paper p-4 transition-[opacity,translate,visibility] duration-180 ease-out md:static md:mt-3 md:flex md:justify-end md:border-0 md:bg-transparent md:p-0 ${visible ? "" : "invisible translate-y-2 opacity-0"}`}
    >
      <div className='w-full md:w-auto'>
        <Button
          tone='ink'
          icon='arrow-right'
          onClick={onNext}
        >
          {label}
        </Button>
      </div>
    </div>
  );
}
