import { useState, memo } from "react";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { setState } from "@/store/global";
import { useNavigate, Outlet } from "react-router-dom";
import styles from "./index.module.scss";

function Home(props) {
  const [count, setCount] = useState(0);
  const dispatch: AppDispatch = useDispatch();
  const { currentTab } = useSelector((state: RootState) => state.global);
  const router = useNavigate();

  return (
    <div className={styles.App}>
      <Outlet />
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
      <h1
        onClick={() => {
          router("/second");
        }}
      >
        Vite + React
      </h1>
      <div className={styles.card}>
        <button
          onClick={() => {
            dispatch(setState({ currentTab: count + "home" }));
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
          <br />
          <span>
            {currentTab}
            <br />
            {import.meta.env.VITE_APP_PROXY_URL}
          </span>
        </p>
      </div>
      <p className={styles["read-the-docs"]}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default memo(Home);
