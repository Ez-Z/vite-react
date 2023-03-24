import styles from "./AppLayout.module.scss";
import Routes from "@/Routes";
import { lazy, Suspense } from "react";
import { use } from "react-router-dom";

function AppLayout() {
  return (
    <div className={styles.AppLayout}>
      <Routes />
    </div>
  );
}

export default AppLayout;
