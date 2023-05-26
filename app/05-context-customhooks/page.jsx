import SyntaxHighlighter from "@/app/components/SyntaxHighlighter";
import ContextPageWrapper from "./ContextPageWrapper";

export default function Page() {
  const codeBlockOne = `import { useState, createContext, useContext } from "react";

  // create the useStore custom hook
  const useStore = () => {
    // use two pieces of state, user and cartCount
    const [user, setUser] = useState("");
    const [cartCount, setCartCount] = useState(0);

    return {
      // return an object with 2 properties and 4 methods
      user,
      cartCount,
      login: () => setUser("Baz"),
      logout: () => setUser(""),
      addToCart: () => setCartCount(cartCount + 1),
      removeFromCart: () => setCartCount(cartCount - 1),
    };
  };

  // create the Store Context
  // initialsed to null
  const StoreContext = createContext(null);

  // create the Store Context Provider
  // set the value to useStore() and pass it children as props
  export const StoreContextProvider = ({ children }) => {
    return (
      <StoreContext.Provider value={useStore()}>{children}</StoreContext.Provider>
    );
  };

  // export these custom hooks
  export const useUser = () => useContext(StoreContext).user;
  export const useCartCount = () => useContext(StoreContext).cartCount;
  export const useLogin = () => useContext(StoreContext).login;
  export const useLogout = () => useContext(StoreContext).logout;
  export const useAddToCart = () => useContext(StoreContext).addToCart;
  export const useRemoveFromCart = () => useContext(StoreContext).removeFromCart;`;

  const codeBlockTwo = `import {
    useLogin,
    useLogout,
    useAddToCart,
    useRemoveFromCart,
    useUser,
    useCartCount,
    // we need to bring in the Context Provider
    StoreContextProvider,
  } from "./StoreContext";

  const LoginSection = () => {
    // we use the imported custom hooks useLogin and useLogout
    // and assign them to be used as functions inside this component
    const login = useLogin();
    const logout = useLogout();

    return (
      <div>
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
      </div>
    );
  };

  const UserSection = () => {
    // we use the imported custom hook useUser
    const user = useUser();
    return <div>User: {user}</div>;
  };

  const AddToCartSection = () => {
    // we use the imported custom hook useAddToCart
    const addToCart = useAddToCart();
    return (
      <div>
        <button onClick={addToCart}>Add To Cart</button>
      </div>
    );
  };

  const RemoveFromCartSection = () => {
    // we use the imported custom hook useRemoveFromCart
    const removeFromCart = useRemoveFromCart();
    return (
      <div>
        <button onClick={removeFromCart}>Remove From Cart</button>
      </div>
    );
  };

  const CartCountSection = () => {
    // we use the imported custom hook useCartCount
    const cartCount = useCartCount();
    return <div>Cart Count: {cartCount}</div>;
  };

  function ContextPage() {
    return (
      // add the components to the Page
      <div>
        <LoginSection />
        <UserSection />
        <AddToCartSection />
        <RemoveFromCartSection />
        <CartCountSection />
      </div>
    );
  }

  export default function ContextPageWrapper() {
    return (
      // wrap the Page in the Store Context Provider
      <StoreContextProvider>
        <ContextPage />
      </StoreContextProvider>
    );
  }`;

  return (
    <div className="page-container">
      <div className="result-container">
        <ContextPageWrapper />
      </div>
      <div className="code-container">
        <h3>StoreContext.jsx</h3>
        <SyntaxHighlighter
          code={codeBlockOne}
          language={"jsx"}
          lineHighlights={[]}
        />
        <h3>ContextPageWrapper.jsx</h3>
        <SyntaxHighlighter
          code={codeBlockTwo}
          language={"jsx"}
          lineHighlights={[]}
        />
      </div>
    </div>
  );
}
