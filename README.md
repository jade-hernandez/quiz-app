# Quiz App

A quiz in French to revise JavaScript and React, one question at a time.

## The idea

Each section has 10 multiple-choice questions. You pick an answer, see at once if it is right, and read a short explanation before moving on. At the end you get a score and can review your mistakes or try again.

There is no account and no server: your progress and answers stay on your device.

## What's inside

- 2 topics: JavaScript and React
- 17 sections (8 for JavaScript, 9 for React) and 170 questions
- 4 screens: Home (choose a topic), Sections (choose a section), Question, Score
- Progress is saved per section, so you can leave and resume where you stopped
- Code in questions is shown in a code box with syntax colours

## Built with

- [React](https://react.dev) 19 and [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev) for the dev server and the build
- [Tailwind CSS](https://tailwindcss.com) 4 for the styles
- [React Router](https://reactrouter.com) for the addresses (`/react/composants`)

## Run it

You need Node.js 22 and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev
```

Before committing, run all the checks (format, types, lint and build):

```bash
pnpm check
```

The same check runs on GitHub for every push to `main` and every pull request. The site is deployed on Vercel from `main`.

## Project structure

```
src/
  domain/      topics, sections and the shape of a question
  data/        the 170 questions, loaded one section at a time
  features/    one folder per screen: home, sections, quiz, score, status
  ui/          shared pieces: Button, Chip, CodeBox, Icon...
  scroll.ts    every programmatic scroll in one place
docs/
  design-system.md   colours, type, spacing and the reasons behind them
```

A feature can use `ui`, `domain`, `data` and `scroll.ts`, but never another feature.

## Licences

The fonts (Bricolage Grotesque, DM Sans, JetBrains Mono) are open source under the SIL Open Font License. Their notices are in [THIRD_PARTY_LICENSES.md](THIRD_PARTY_LICENSES.md).
