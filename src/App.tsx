import { useEffect, useRef } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router";
import type { NavigateOptions } from "react-router";
import { sections } from "./domain/sections.ts";
import type { Section, TopicId } from "./domain/sections.ts";
import { topics } from "./domain/topics.ts";
import { Home } from "./screens/Home.tsx";
import { Question } from "./screens/Question.tsx";
import { Score } from "./screens/Score.tsx";
import { Sections } from "./screens/Sections.tsx";

function topicPath(topic: TopicId): string {
  return `/${topic}`;
}

function sectionPath(section: Section): string {
  return `/${section.topic}/${section.id.slice(section.topic.length + 1)}`;
}

function isTopicId(value: string | undefined): value is TopicId {
  return value !== undefined && value in topics;
}

function useSection(): Section | undefined {
  const { topic, section } = useParams();
  return sections.find((candidate) => candidate.id === `${topic}-${section}`);
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

function HomeRoute() {
  const go = useGo();
  return <Home onSelectTopic={(topic) => go(topicPath(topic))} />;
}

function SectionsRoute() {
  const { topic } = useParams();
  const go = useGo();
  if (!isTopicId(topic)) return <Redirect to='/' />;
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
  if (section === undefined) return <Redirect to='/' />;
  return (
    <Question
      section={section}
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
  if (section === undefined) return <Redirect to='/' />;
  if (answers === undefined) {
    return <Redirect to={sectionPath(section)} />;
  }
  return (
    <Score
      section={section}
      answers={answers}
      onRetry={() => go(sectionPath(section), { replace: true })}
      onBack={() => go(topicPath(section.topic))}
    />
  );
}

export default function App() {
  const { pathname } = useLocation();
  const shown = useRef(pathname);

  useEffect(() => {
    if (shown.current === pathname) return;
    shown.current = pathname;
    document.querySelector<HTMLElement>("main h1")?.focus();
  }, [pathname]);

  return (
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
        element={<Redirect to='/' />}
      />
    </Routes>
  );
}
