import { Button } from "../components/ui/Button.tsx";
import { Logo } from "../components/ui/Logo.tsx";

type LoadErrorProps = {
  readonly onReload: () => void;
  readonly onHome: () => void;
};

export function LoadError({ onReload, onHome }: LoadErrorProps) {
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
          Impossible de charger les questions
        </h1>
        <p className='text-sm lg:text-base'>
          Vérifie ta connexion, puis réessaie.
        </p>
        <div className='flex w-full flex-col gap-2 md:max-w-80'>
          <Button
            tone='action'
            onClick={onReload}
          >
            Recharger
          </Button>
          <Button
            tone='link'
            onClick={onHome}
          >
            Retour à l&apos;accueil
          </Button>
        </div>
      </div>
    </main>
  );
}
