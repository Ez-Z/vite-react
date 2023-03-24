import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { setState } from "@/store/global";
import Home from "@/pages/Home";
import styles from "@/App.module.scss";

function App() {
  const [count, setCount] = useState(0);
  const dispatch: AppDispatch = useDispatch();
  const { currentTab } = useSelector((state: RootState) => state.global);

  return (
    <div className={styles.App}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img
            src={reactLogo}
            className={`${styles.logo} ${styles.react}`}
            alt="React logo"
          />
        </a>
      </div>
      <Home />
      <h1>Vite + React</h1>
      <div className={styles.card}>
        <button
          onClick={() => {
            dispatch(setState({ currentTab: count + 'home' }));
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
          <br />
          <span>{currentTab}</span>
        </p>
      </div>
      <p className={styles["read-the-docs"]}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
