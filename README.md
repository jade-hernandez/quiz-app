# Quiz App

A quiz app to review and reinforce JavaScript and React fundamentals.

## Overview

Quiz App lets you test your JavaScript and React knowledge through themed quizzes. Every question
comes with an explanation, so you understand why an answer is right or wrong, not just whether
you got it.

## Key Features

- **Two topic tracks**: JavaScript (Primitives, Variables, Operators, Conditions, Loops,
  Functions, Arrays, Objects) and React (Basics, Components, JSX, Props, State, useEffect, Lists &
  Keys, Events, Hooks)
- **Typed question bank**: every question follows the same structure (prompt, options, correct
  answer, explanation)
- **An explanation with every answer**, not just a right or wrong
- **Score screen** at the end of each quiz

## Tech Stack

- **React 19** with TypeScript
- **Vite** for development and builds
- **Tailwind CSS v4** for styling
- **CVA**, **clsx**, and **tailwind-merge** for component variant management
- **ESLint** (flat config) and **Prettier** (with `prettier-plugin-tailwindcss`) for code quality
- **pnpm** as package manager

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm dev

# Build for production
pnpm build

```

## Usage

1. **Pick a track**: choose the JavaScript or React topic
2. **Answer the questions**: one question at a time, with multiple-choice options
3. **Read the explanation**: every answer comes with an explanation to understand the underlying
   concept
4. **Check your score**: a summary screen displays your result at the end of the quiz

## Data Source

Questions are manually written and curated, organized by topic in typed TypeScript files, then
aggregated through barrel files (`quiz-questions-js.ts` and `quiz-questions-react.ts`).

## Project Structure

```
src/
├── components/     # App, Home, Quiz, QuizCard, QuizOption, Button, ScoreScreen
├── data/
│   ├── js/         # JavaScript questions by topic (primitives, variables, operators, ...)
│   ├── react/       # React questions by topic (basics, components, hooks, ...)
│   ├── quiz-questions-js.ts       # Barrel file aggregating JS questions
│   └── quiz-questions-react.ts    # Barrel file aggregating React questions
└── types.ts        # QuizQuestion type definition
```

## License

This project is built for educational and portfolio purposes.
