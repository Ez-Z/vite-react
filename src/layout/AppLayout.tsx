import styles from "./AppLayout.module.scss";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className={styles.AppLayout}>
      <Outlet />
    </div>
  );
}

export default AppLayout;
