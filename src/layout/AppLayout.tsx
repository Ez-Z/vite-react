import styles from "./AppLayout.module.scss";
import { Outlet } from "react-router-dom";
import { Button } from "antd-mobile";
import { Translation } from "react-i18next";
import "@/react-i18n/i18n";

function AppLayout() {
  return (
    <div className={styles.AppLayout}>
      <Translation>
        {(t, { i18n }) => (
          <>
            <Button
              onClick={() => {
                i18n.language === "zh"
                  ? i18n.changeLanguage("en")
                  : i18n.changeLanguage("zh");
              }}
            >
              {t("changeLanguage")}
            </Button>
          </>
        )}
      </Translation>
      <Outlet />
    </div>
  );
}

export default AppLayout;
