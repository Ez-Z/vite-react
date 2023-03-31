import { useCallback, useEffect, useState } from "react";
import GlobalMenu from "@/components/GlobalMenu";
import GlobalHeader from "@/components/GlobalHeader";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./AppLayout.module.scss";

function AppLayout() {
  const [defKey, setDefKey] = useState("");
  const location = useLocation();

  useEffect(() => {
    setDefKey(location.pathname);
  }, [location]);

  return (
    <div className={styles.AppLayout}>
      <div className={styles.left}>
        <div className={styles.logo}>测试logo</div>
        <GlobalMenu defKey={defKey} />
      </div>
      <div className={styles.right}>
        <GlobalHeader defKey={defKey} showBread={true} />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
