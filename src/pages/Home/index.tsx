import { useState, memo } from "react";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { setState } from "@/store/global";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { Button } from "antd-mobile";
import styles from "./index.module.scss";

function Home(props) {
  const [count, setCount] = useState(0);
  const dispatch: AppDispatch = useDispatch();
  const { currentTab } = useSelector((state: RootState) => state.global);
  const router = useNavigate();
  const location = useLocation();

  return (
    <div className={styles.App}>
      {location.pathname !== "/" ? (
        <Outlet />
      ) : (
        <>
          <Button onClick={() => router("/child")}>按钮</Button>
          <h1
            onClick={() => {
              router("/second");
            }}
          >
            Vite + React
          </h1>
          <div className={styles.card}>
            <Button
              onClick={() => {
                dispatch(setState({ currentTab: count + "home" }));
                setCount((count) => count + 1);
              }}
            >
              count is {count}
            </Button>
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
        </>
      )}
    </div>
  );
}

export default memo(Home);
