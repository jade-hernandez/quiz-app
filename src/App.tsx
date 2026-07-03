import { Home } from "./components/Home";

function App() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-neutral-50 px-4 py-8">
      <div className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-sm">
        <Home />
      </div>
    </div>
  );
}
export { App };
