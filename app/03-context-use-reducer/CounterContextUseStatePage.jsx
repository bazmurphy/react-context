"use client";

// why would you want to useReducer?
// if your state is a bit more complex then you might want to use useReducer as opposed to useState
// because we normally use useState just to have one value, a string, number, boolean, object or an array
// what happens when you want to have multiple values in there
// or you want to have multiple different things that you can do to the values in the reducer

// bring in useReducer
import { useReducer, createContext, useContext } from "react";

// the reducer function takes the currentState and an action
const reducer = (state, action) => {
  // the action is an object and there is a .type on it
  switch (action.type) {
    case "add":
      return state + 1;
    case "subtract":
      return state - 1;
    default:
      return state;
  }
};

// useReducer returns two values (a tuple)
// the first one being the value
// the second one being the dispatch function (whereas on others its a setter)

const CounterContext = createContext(null);

const CounterContextProvider = ({ children }) => {
  return (
    // useReducer starts off with an initial value, but it also
    <CounterContext.Provider value={useReducer(reducer, 0)}>
      {children}
    </CounterContext.Provider>
  );
};

const Container = () => {
  return (
    <div>
      <AddOneButton />
      <SubtractOneButton />
    </div>
  );
};

const AddOneButton = () => {
  // we change setCounter to dispatch
  const [counter, dispatch] = useContext(CounterContext);
  return (
    <div>
      {/* the dispatch takes in a payload (an object) and we can use the type to match the above action.type*/}
      <button onClick={() => dispatch({ type: "add" })}>Add One</button>
    </div>
  );
};

const SubtractOneButton = () => {
  // we change setCounter to dispatch
  const [counter, dispatch] = useContext(CounterContext);
  return (
    <div>
      {/* the dispatch takes in a payload (an object) and we can use the type to match the above action.type*/}
      <button onClick={() => dispatch({ type: "subtract" })}>
        Subtract One
      </button>
    </div>
  );
};

const Counter = () => {
  const [counter, setCounter] = useContext(CounterContext);
  return <div>Counter: {counter}</div>;
};

function CounterContextUseState() {
  return (
    <CounterContextProvider>
      <Container />
      <Counter />
    </CounterContextProvider>
  );
}

export default function CounterContextUseStatePage() {
  return (
    <div>
      <CounterContextUseState />
      <CounterContextUseState />
      <CounterContextUseState />
    </div>
  );
}
