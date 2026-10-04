import { QuizCard } from "./components/QuizCard";
import { jsQuestions } from "./data/quiz-questions-js";
import { reactQuestions } from "./data/quiz-questions-react";
import { sections } from "./data/sections";
import type { QuizId, Section } from "./types";
import { cn } from "./utils/utils";

type LandingProps = {
  onSelectTheme: (id: QuizId) => void;
};

type ThemeCardData = {
  id: QuizId;
  title: string;
  description: string;
  questionCount: number;
  themeSections: Section[];
};

type Step = {
  id: string;
  title: string;
  description: string;
};

const themeCards: ThemeCardData[] = [
  {
    id: "javascript",
    title: "JavaScript",
    description: "Les fondamentaux du langage, des variables aux tableaux.",
    questionCount: jsQuestions.length,
    themeSections: sections.filter(section => section.theme === "javascript"),
  },
  {
    id: "react",
    title: "React",
    description: "Penser en composants : de JSX aux hooks.",
    questionCount: reactQuestions.length,
    themeSections: sections.filter(section => section.theme === "react"),
  },
];

const steps: Step[] = [
  {
    id: "choose-topic",
    title: "Choisis un sujet",
    description: "JavaScript ou React, puis la section qui t'intéresse.",
  },
  {
    id: "answer",
    title: "Réponds et comprends",
    description: "Après chaque réponse, une explication te dit pourquoi.",
  },
  {
    id: "review-mistakes",
    title: "Revois tes erreurs",
    description: "À la fin, ton score, les questions ratées et un bouton pour réessayer.",
  },
  {
    id: "find-scores",
    title: "Retrouve tes scores",
    description: "Tes résultats sont gardés sur ton appareil pour suivre ta progression.",
  },
];

const focusLight =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900";
const focusDark =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

function Landing({ onSelectTheme }: LandingProps) {
  const totalQuestions = jsQuestions.length + reactQuestions.length;

  return (
    <div className='min-h-screen bg-neutral-50 text-neutral-900'>
      <a
        href='#main'
        className={cn(
          "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-10 focus:rounded-lg focus:bg-neutral-900 focus:px-4 focus:py-2 focus:text-white",
          focusLight,
        )}
      >
        Aller au contenu
      </a>

      <header className='mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-5'>
        <a
          href='#main'
          className={cn(
            "font-display flex items-center gap-2.5 rounded-lg text-xl font-bold",
            focusLight,
          )}
        >
          Quiz App
        </a>

        <nav
          aria-label='Navigation principale'
          className='flex flex-wrap items-center gap-x-7 gap-y-2 text-sm font-medium'
        >
          <a
            href='#themes'
            className={cn("rounded text-neutral-600 hover:text-neutral-900", focusLight)}
          >
            Sujets
          </a>
          <a
            href='#how'
            className={cn("rounded text-neutral-600 hover:text-neutral-900", focusLight)}
          >
            Comment ça marche
          </a>
          <a
            href='#themes'
            className={cn(
              "rounded-xl bg-neutral-900 px-5 py-2.5 font-semibold text-white hover:bg-neutral-900/80",
              focusLight,
            )}
          >
            Commencer
          </a>
        </nav>
      </header>

      <main id='main'>
        <section className='mx-auto flex w-full max-w-5xl flex-col items-start gap-6 px-6 pt-10 pb-20 sm:pt-16 sm:pb-28'>
          <p className='rounded-full bg-amber-100 px-3.5 py-1.5 text-sm font-semibold text-amber-800'>
            JavaScript et React · en français
          </p>
          <h1 className='font-display max-w-3xl text-4xl leading-tight font-extrabold tracking-tight sm:text-6xl'>
            Révise JavaScript et React, une question à la fois.
          </h1>
          <p className='max-w-xl text-lg text-neutral-600'>
            {totalQuestions} questions corrigées et expliquées pour consolider les bases. Choisis un
            sujet, réponds, relis tes erreurs, puis recommence jusqu'à maîtriser.
          </p>
          <div className='mt-2 flex flex-wrap gap-3'>
            <a
              href='#themes'
              className={cn(
                "rounded-2xl bg-neutral-900 px-7 py-3.5 font-semibold text-white hover:bg-neutral-900/80",
                focusLight,
              )}
            >
              Commencer un quiz
            </a>
            <a
              href='#how'
              className={cn(
                "rounded-2xl border border-neutral-300 bg-white px-7 py-3.5 font-semibold text-neutral-900 hover:border-neutral-400",
                focusLight,
              )}
            >
              Comment ça marche
            </a>
          </div>
          <p className='text-sm text-neutral-600'>
            Sans compte. Tes scores restent sur ton appareil.
          </p>
        </section>

        <section
          id='themes'
          aria-labelledby='themes-title'
          className='scroll-mt-6 border-y border-neutral-200 bg-white'
        >
          <div className='mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-20'>
            <div className='flex max-w-xl flex-col gap-2.5'>
              <h2
                id='themes-title'
                className='font-display text-3xl font-extrabold tracking-tight sm:text-4xl'
              >
                Choisis ton sujet
              </h2>
              <p className='text-neutral-600'>
                Chaque sujet est découpé en sections de 10 questions, à faire dans l'ordre que tu
                veux.
              </p>
            </div>

            <div className='grid gap-6 md:grid-cols-2'>
              {themeCards.map(({ id, ...card }) => (
                <QuizCard
                  key={id}
                  {...card}
                  theme={id}
                  onClick={() => onSelectTheme(id)}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id='how'
          aria-labelledby='how-title'
          className='mx-auto flex w-full max-w-5xl scroll-mt-6 flex-col gap-10 px-6 py-20'
        >
          <div className='flex max-w-xl flex-col gap-2.5'>
            <h2
              id='how-title'
              className='font-display text-3xl font-extrabold tracking-tight sm:text-4xl'
            >
              Comment ça marche
            </h2>
            <p className='text-neutral-600'>
              Pas de piège : l'important, c'est de comprendre pourquoi une réponse est juste.
            </p>
          </div>

          <ol
            role='list'
            className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'
          >
            {steps.map((step, index) => (
              <li
                key={step.id}
                className='flex flex-col gap-3'
              >
                <span
                  aria-hidden='true'
                  className='font-display flex size-11 items-center justify-center rounded-[14px] bg-neutral-900 text-xl font-bold text-white'
                >
                  {index + 1}
                </span>
                <h3 className='font-display text-xl font-bold'>{step.title}</h3>
                <p className='text-neutral-600'>{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className='mx-auto w-full max-w-5xl px-6 pb-20'>
          <div className='flex flex-wrap items-center justify-between gap-7 rounded-[28px] bg-neutral-900 px-8 py-12 text-white sm:px-10'>
            <h2 className='font-display max-w-md text-3xl leading-tight font-extrabold tracking-tight'>
              Prêt pour une première série de 10 questions ?
            </h2>
            <a
              href='#themes'
              className={cn(
                "rounded-2xl bg-white px-7 py-3.5 font-bold text-neutral-900 hover:bg-neutral-200",
                focusDark,
              )}
            >
              Commencer
            </a>
          </div>
        </section>
      </main>

      <footer className='border-t border-neutral-200'>
        <div className='mx-auto flex w-full max-w-5xl flex-wrap justify-between gap-3 px-6 py-7 text-sm text-neutral-600'>
          <p>Quiz App · projet personnel</p>
          <p>Construit avec React, TypeScript et Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export { Landing };
