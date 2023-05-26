import SyntaxHighlighter from "@/app/components/SyntaxHighlighter";
import CounterContextUseStatePage from "./CounterContextUseStatePage";

export default function Page() {
  const codeBlock = `// we import createContext and useContext
  import { useState, createContext, useContext } from "react";

  // we are creating a type of Context
  // because you can have multiple instances of the same type of context(!) on the same page

  // you have to give it an initial state, and that will be the same initial state for all the instances of that context
  // we will use null
  const CounterContext = createContext(null);

  // and then we need to get it into the tree, and the way you do that is to create a provider
  // and that provider takes children which are the components nested within it
  // the value of this CounterContext is going to be the tuple that is returned from useState,
  // the first value being the value, and the second one being the setter
  // and we wrap the children in it
  const CounterContextProvider = ({ children }) => {
    return (
      <CounterContext.Provider value={useState(0)}>
        {children}
      </CounterContext.Provider>
    );
  };

  // context is a way of defining up at a higher level
  // that we have some shared state some shared context some shared values
  // that we're going to percolate down to any component within that hierarchy that needs that data

  // we can now remove props on this component
  const Container = () => {
    return (
      <div>
        <AddOneButton />
      </div>
    );
  };

  // we can now remove props on this component
  const AddOneButton = () => {
    // we get the tuple [counter, setCounter] that is (setup and from) the CounterContextProvider
    // and in this case use "setCounter"
    const [counter, setCounter] = useContext(CounterContext);
    return (
      <div>
        <button onClick={() => setCounter((value) => value + 1)}>Add One</button>
      </div>
    );
  };

  // we can now remove props on this component
  const Counter = () => {
    // we get the tuple [counter, setCounter] that is (setup and from) the CounterContextProvider
    // and in this case use "counter"
    const [counter, setCounter] = useContext(CounterContext);
    return <div>Counter: {counter}</div>;
  };

  // BEFORE BELOW: export default function CounterContextUseState()
  function CounterContextUseState() {
    // (!) something to note is you cannot access the CounterContext in the level of "CounterUseState" (this component)
    // (!) you can only access it in the subcomponents

    // we can also remove the useState at this level

    return (
      // and now we can wrap the container and counter in that Context
      <CounterContextProvider>
        <Container />
        <Counter />
      </CounterContextProvider>
    );
  }

  // a lot of people are used to using context right at the top of the app
  // there's a whole bunch of providers right at the top
  // and they provide global context down to the different components that need them
  // (!) but you can actually use context at any level
  // (!) and you can use multiple instances of the same type of context

  // and as seen below they are all self contained
  export default function CounterContextUseStatePage() {
    return (
      <div>
        <CounterContextUseState />
        <CounterContextUseState />
        <CounterContextUseState />
      </div>
    );
  }

  // so think about using context in different ways either from the global perspective
  // where you give context down to the entire tree
  // or even within a small set of components
  // where you might not run into the same performance problems you do when you do it at the top level
  `;

  return (
    <div className="page-container">
      <div className="result-container">
        <CounterContextUseStatePage />
      </div>
      <div className="code-container">
        <h3>CounterContextUseStatePage.jsx</h3>
        <SyntaxHighlighter
          code={codeBlock}
          language={"jsx"}
          lineHighlights={[]}
        />
      </div>
    </div>
  );
}
