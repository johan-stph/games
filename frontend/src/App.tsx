import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getAuth, signOut } from "firebase/auth";

import { Link } from "react-router";
import { useAuthState } from "./auth/useAuthState";

function App() {
  const [count, setCount] = useState(0);
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth, {});

  console.log("userinfo", user);
  console.log("loading", loading);

  if (loading) {
    return <div>Authentication is loading...</div>;
  }

  if (!user) {
    return (
      <div>
        You are not authenticated
        <Link to={"/signup"}>Signup</Link>
      </div>
    );
  }

  return (
    <>
      <div>
        <button onClick={() => {
          signOut(auth)
        }}>Signout</button>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
