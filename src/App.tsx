import { useState } from "react";
import type { TopicId } from "./domain/sections.ts";
import { Home } from "./screens/Home.tsx";
import { Sections } from "./screens/Sections.tsx";

export default function App() {
  const [topic, setTopic] = useState<TopicId | null>(null);

  return topic === null ? (
    <Home onSelectTopic={setTopic} />
  ) : (
    <Sections
      topic={topic}
      onBack={() => setTopic(null)}
    />
  );
}
