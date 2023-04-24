import { Button } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

function Second() {
  const router = useNavigate();
  return (
    <div className={styles.App}>
      <Button onClick={() => router(-1)}>返回</Button>
      second
    </div>
  );
}

export default Second;
