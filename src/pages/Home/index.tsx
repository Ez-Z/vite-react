import { memo } from "react";
import { Outlet } from "react-router-dom";
import styles from "./index.module.scss";

function Home() {
  return (
    <div className={styles.App}>
      <Outlet />
    </div>
  );
}

export default memo(Home);
