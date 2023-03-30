import { useState, memo } from "react";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { setState } from "@/store/global";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { Button } from "antd";
import styles from "./index.module.scss";

function Home(props) {
  const [count, setCount] = useState(0);
  const dispatch: AppDispatch = useDispatch();
  const { currentTab } = useSelector((state: RootState) => state.global);
  const router = useNavigate();
  const location = useLocation();

  return (
    <div className={styles.App}>
      {location.pathname === "/home/first" ? (
        <>
          <Button
            onClick={() => {
              router("/home/first/form");
            }}
          >
            跳转到子页面
          </Button>
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
        </>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default memo(Home);
