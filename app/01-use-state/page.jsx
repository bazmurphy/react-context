import SyntaxHighlighter from "@/app/components/SyntaxHighlighter";
import CounterUseState from "./CounterUseState";

export default function Page() {
  const codeBlock = `import { useState } from "react";

  // this is called prop drilling
  // container doesn't need to know about setCounter but the only reason its getting it
  // is because AddOneButton needs it as a prop
  const Container = ({ setCounter }) => {
    return (
      <div>
        <AddOneButton setCounter={setCounter} />
      </div>
    );
  };

  const AddOneButton = ({ setCounter }) => {
    return (
      <div>
        <button onClick={() => setCounter((value) => value + 1)}>Add One</button>
      </div>
    );
  };

  const Counter = ({ counter }) => {
    return <div>Counter: {counter}</div>;
  };

  export default function CounterUseState() {
    const [counter, setCounter] = useState(0);

    return (
      <div>
        <Container setCounter={setCounter} />
        <Counter counter={counter} />
      </div>
    );
  }`;
  return (
    <div className="page-container">
      <div className="result-container">
        <CounterUseState />
      </div>
      <div className="code-container">
        <h3>CounterUseState.jsx</h3>
        <SyntaxHighlighter
          code={codeBlock}
          language={"jsx"}
          lineHighlights={[]} // 3, 8, 16, 24, 29, 33, 34]
        />
      </div>
    </div>
  );
}
