import { useState, memo } from "react";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { setState } from "@/store/global";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "antd-mobile";
import styles from "./index.module.scss";

function Home(props) {
  const [count, setCount] = useState(0);
  const dispatch: AppDispatch = useDispatch();
  const { currentTab } = useSelector((state: RootState) => state.global);
  const router = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.App}>
      {location.pathname !== "/home" ? (
        <Outlet />
      ) : (
        <>
          <Button onClick={() => router("/home/child")}>{t("btn")}</Button>
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
