import { useTranslation } from "react-i18next";
import { Button } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

function Second(props) {
  const { t, i18n } = useTranslation();
  const router = useNavigate();

  return (
    <div className={styles.App}>
      <p>
        <Button onClick={() => router(-1)}>返回</Button>
      </p>
      {t("home-childPage")}
    </div>
  );
}

export default Second;
