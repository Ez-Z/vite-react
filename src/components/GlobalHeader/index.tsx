import { menusP } from "@/Routes";
import { useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import styles from "./index.module.scss";

const GlobalHeader = ({
  defKey,
  showBread = false,
}: {
  defKey: string;
  showBread: boolean;
}) => {
  const [bread, setBread] = useState([]);
  useEffect(() => {
    if (menusP[defKey]) {
      const keyPath = menusP[defKey].keyPath ?? [];
      const temp = [];
      keyPath?.map((it) => {
        const menu = menusP[it];
        temp.push({
          label: menu.label,
          key: it,
        });
      });
      setBread(temp);
    }
  }, [defKey, menusP]);

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
      {showBread && (
        <div className={styles.breadcrumb}>
          <Breadcrumb>
            {bread.map((item) => (
              <Breadcrumb.Item key={item?.key}>{item?.label}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </div>
      )}
    </div>
  );
};

export default GlobalHeader;
