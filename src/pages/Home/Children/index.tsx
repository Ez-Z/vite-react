import { useTranslation } from "react-i18next";
import styles from "./index.module.scss";

function Second(props) {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.App}>
      {t('home-childPage')}
    </div>
  );
}

export default Second;
