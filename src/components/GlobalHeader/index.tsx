import { menusP } from "@/Routes";
import styles from "./index.module.scss";

const GlobalHeader = ({ defKey }: { defKey: string }) => {
  return (
    <div className={styles.globalHeader}>
      <div className={styles.leftContent}><div className={styles.pageTitle}>{menusP?.[defKey]?.label ?? ""}</div></div>
      <div className={styles.rightContent}></div>
    </div>
  );
};

export default GlobalHeader;
