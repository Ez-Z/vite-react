import { menusP } from "@/Routes";
import storage from "good-storage";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";

const GlobalHeader = ({
  defKey,
  showBread = true,
}: {
  defKey: string;
  showBread: boolean;
}) => {
  const [bread, setBread] = useState([]);
  useEffect(() => {
    const keyPath = storage.session.get("keyPath");
    const temp = [];
    keyPath.map((it) => {
      const menu = menusP[it];
      temp.push({
        label: menu.label,
        key: it,
      });
    });
    setBread(temp);
  }, [defKey]);

  return (
    <div className={styles.globalHeader}>
      <div className={styles.headerContent}>
        <div className={styles.leftContent}>
          <div className={styles.pageTitle}>
            {menusP?.[defKey]?.label ?? ""}
          </div>
        </div>
        <div className={styles.rightContent}></div>
      </div>
      {showBread && <div className={styles.breadcrumb}></div>}
    </div>
  );
};

export default GlobalHeader;
