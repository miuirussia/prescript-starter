import { signal } from "@preact-signals/safe-react";

import { Button } from "@/components/ui/button";

import reactLogo from "@/assets/react.svg";
import viteLogo from "@/assets/vite.svg";
import purescriptLogo from "@/assets/purescript.svg";

const count = signal(0);

function App() {
  return (
    <div className="flex items-center justify-center w-dvw h-dvh">
      <div className="text-center">
        <div className="flex">
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="size-[150px] react" alt="React logo" />
          </a>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="size-[150px] vite" alt="Vite logo" />
          </a>
          <a href="https://purescript.org" target="_blank">
            <img src={purescriptLogo} className="size-[150px] purescript" alt="Purescript logo" />
          </a>
        </div>
        <h1>Vite + React + Purescript</h1>
        <div className="card">
          <Button
            onClick={() => {
              count.value++;
            }}
          >
            count is {count.value}
          </Button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">Click on the Vite, React and PureScript logos to learn more</p>
      </div>
    </div>
  );
}

export default App;
