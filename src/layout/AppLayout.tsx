import styles from "./AppLayout.module.scss";
import Routes from "@/Routes";

function AppLayout() {
  return (
    <div className={styles.AppLayout}>
      <Routes />
    </div>
  );
}

export default AppLayout;
