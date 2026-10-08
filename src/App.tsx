import { useEffect, useRef, useState } from "react";
import type { TopicId } from "./domain/sections.ts";
import { Home } from "./screens/Home.tsx";
import { Sections } from "./screens/Sections.tsx";

export default function App() {
  const [topic, setTopic] = useState<TopicId | null>(null);
  const onHome = topic === null;
  const wasOnHome = useRef(onHome);

  useEffect(() => {
    if (wasOnHome.current === onHome) return;
    wasOnHome.current = onHome;
    document.querySelector<HTMLElement>("main h1")?.focus();
  }, [onHome]);

  return onHome ? (
    <Home onSelectTopic={setTopic} />
  ) : (
    <Sections
      topic={topic}
      onBack={() => setTopic(null)}
    />
  );
}
