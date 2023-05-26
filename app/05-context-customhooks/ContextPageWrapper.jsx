"use client";

import {
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
}
