import { useEffect, useRef, useState } from "react";
import type { ReactElement } from "react";
import type { Section, TopicId } from "./domain/sections.ts";
import { Home } from "./screens/Home.tsx";
import { Question } from "./screens/Question.tsx";
import { Score } from "./screens/Score.tsx";
import { Sections } from "./screens/Sections.tsx";

type Screen =
  | { readonly name: "home" }
  | { readonly name: "sections"; readonly topic: TopicId }
  | { readonly name: "question"; readonly section: Section }
  | {
      readonly name: "score";
      readonly section: Section;
      readonly answers: readonly number[];
    };

function renderScreen(
  screen: Screen,
  go: (screen: Screen) => void,
): ReactElement {
  switch (screen.name) {
    case "home":
      return (
        <Home onSelectTopic={(topic) => go({ name: "sections", topic })} />
      );
    case "sections":
      return (
        <Sections
          topic={screen.topic}
          onBack={() => go({ name: "home" })}
          onSelectSection={(section) => go({ name: "question", section })}
        />
      );
    case "question":
      return (
        <Question
          section={screen.section}
          onBack={() => go({ name: "sections", topic: screen.section.topic })}
          onFinish={(answers) =>
            go({ name: "score", section: screen.section, answers })
          }
        />
      );
    case "score":
      return (
        <Score
          section={screen.section}
          answers={screen.answers}
          onRetry={() => go({ name: "question", section: screen.section })}
          onBack={() => go({ name: "sections", topic: screen.section.topic })}
        />
      );
  }
}

export default function App() {
  const [screen, setScreen] = useState<Screen>({ name: "home" });
  const shown = useRef(screen.name);

  useEffect(() => {
    if (shown.current === screen.name) return;
    shown.current = screen.name;
    document.querySelector<HTMLElement>("main h1")?.focus();
  }, [screen.name]);

  return renderScreen(screen, setScreen);
}
