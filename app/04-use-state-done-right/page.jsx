import SyntaxHighlighter from "@/app/components/SyntaxHighlighter";
import CounterUseState from "./CounterUseState";

export default function Page() {
  const codeBlock = `import { useState } from "react";

  // instead of setCounter, we do the same thing as we did with the Context Provider and we use "children"
  const Container = ({ children }) => {
    // and we just render the children where we want them to go in this container hierarchy
    return <div>{children}</div>;
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

  // and now you don't have the prop drilling because the CounterUseState component has everything needed at the top level
  // you avoid prop drilling and get a nice small concise component
  export default function CounterUseState() {
    const [counter, setCounter] = useState(0);

    return (
      <div>
        {/* we want the container to be a generic container */}
        <Container>
          <AddOneButton setCounter={setCounter} />
        </Container>
        <Counter counter={counter} />
      </div>
    );
  }
  `;

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
          lineHighlights={[]}
        />
      </div>
    </div>
  );
}
