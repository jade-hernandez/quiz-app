import { Suspense, use, useEffect, useRef } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router";
import type { NavigateOptions } from "react-router";
import { loadQuestions } from "./data/queries.ts";
import { sections } from "./domain/sections.ts";
import type { Section, TopicId } from "./domain/sections.ts";
import { topics } from "./domain/topics.ts";
import { Home } from "./features/home/Home.tsx";
import { ErrorBoundary } from "./ui/ErrorBoundary.tsx";
import { LoadError } from "./features/status/LoadError.tsx";
import { Loading } from "./features/status/Loading.tsx";
import { NotFound } from "./features/status/NotFound.tsx";
import { Question } from "./features/quiz/Question.tsx";
import { Score } from "./features/score/Score.tsx";
import { Sections } from "./features/sections/Sections.tsx";

function topicPath(topic: TopicId): string {
  return `/${topic}`;
}

function sectionPath(section: Section): string {
  return `/${section.topic}/${section.slug}`;
}

function isTopicId(value: string | undefined): value is TopicId {
  return value !== undefined && value in topics;
}

function useSection(): Section | undefined {
  const { topic, section } = useParams();
  return sections.find(
    (candidate) => candidate.topic === topic && candidate.slug === section,
  );
}

function readAnswers(state: unknown): readonly number[] | undefined {
  if (typeof state !== "object" || state === null) return undefined;
  if (!("answers" in state) || !Array.isArray(state.answers)) return undefined;
  return state.answers.every((answer) => typeof answer === "number")
    ? state.answers
    : undefined;
}

function Redirect({ to }: { readonly to: string }) {
  return (
    <Navigate
      to={to}
      replace
    />
  );
}

function useGo() {
  const navigate = useNavigate();
  return (to: string, options?: NavigateOptions) => {
    void navigate(to, options);
  };
}

function NotFoundRoute() {
  const go = useGo();
  return <NotFound onHome={() => go("/")} />;
}

function HomeRoute() {
  const go = useGo();
  return <Home onSelectTopic={(topic) => go(topicPath(topic))} />;
}

function SectionsRoute() {
  const { topic } = useParams();
  const go = useGo();
  if (!isTopicId(topic)) return <NotFoundRoute />;
  return (
    <Sections
      topic={topic}
      onBack={() => go("/")}
      onSelectSection={(section) => go(sectionPath(section))}
    />
  );
}

function QuestionRoute() {
  const section = useSection();
  const go = useGo();
  if (section === undefined) return <NotFoundRoute />;
  return (
    <Question
      section={section}
      questions={use(loadQuestions(section.id))}
      onBack={() => go(topicPath(section.topic))}
      onFinish={(answers) =>
        go(`${sectionPath(section)}/score`, {
          replace: true,
          state: { answers },
        })
      }
    />
  );
}

function ScoreRoute() {
  const section = useSection();
  const go = useGo();
  const answers = readAnswers(useLocation().state);
  if (section === undefined) return <NotFoundRoute />;
  if (answers === undefined) {
    return <Redirect to={sectionPath(section)} />;
  }
  return (
    <Score
      section={section}
      questions={use(loadQuestions(section.id))}
      answers={answers}
      onRetry={() => go(sectionPath(section), { replace: true })}
      onBack={() => go(topicPath(section.topic))}
    />
  );
}

export default function App() {
  const { pathname } = useLocation();
  const go = useGo();
  const shown = useRef(pathname);

  useEffect(() => {
    if (shown.current === pathname) return;
    shown.current = pathname;
    document.querySelector<HTMLElement>("main h1")?.focus();
  }, [pathname]);

  return (
    <ErrorBoundary
      resetKey={pathname}
      fallback={() => (
        <LoadError
          onReload={() => window.location.reload()}
          onHome={() => go("/")}
        />
      )}
    >
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path='/'
            element={<HomeRoute />}
          />
          <Route
            path='/:topic'
            element={<SectionsRoute />}
          />
          <Route
            path='/:topic/:section'
            element={<QuestionRoute />}
          />
          <Route
            path='/:topic/:section/score'
            element={<ScoreRoute />}
          />
          <Route
            path='*'
            element={<NotFoundRoute />}
          />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
