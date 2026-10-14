import { Button } from "../ui/Button.tsx";
import { Logo } from "../ui/Logo.tsx";

type NotFoundProps = { readonly onHome: () => void };

export function NotFound({ onHome }: NotFoundProps) {
  return (
    <main className='mx-auto flex min-h-dvh w-full max-w-160 flex-col items-center gap-3 p-4 text-center lg:p-10'>
      <header className='flex'>
        <Logo />
      </header>
      <div className='my-auto flex w-full flex-col items-center gap-3'>
        <h1
          tabIndex={-1}
          className='w-fit display text-3xl leading-display lg:text-4xl'
        >
          Page introuvable
        </h1>
        <p className='text-sm lg:text-base'>
          Cette adresse ne correspond à aucune page.
        </p>
        <div className='w-full md:max-w-80'>
          <Button
            tone='action'
            onClick={onHome}
          >
            Retour à l&apos;accueil
          </Button>
        </div>
      </div>
    </main>
  );
}
