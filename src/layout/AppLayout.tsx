import { useCallback, useEffect, useState } from "react";

import styles from "./AppLayout.module.scss";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Menu } from "antd";
import { menus, menusP } from "@/Routes";

function AppLayout() {
  const [title, setTitle] = useState("");
  const location = useLocation();
  const defKey = location.pathname;

  useEffect(() => {}, []);

  const router = useNavigate();

  const getTitle = useCallback((key) => {}, [menus]);

  const menuClick = (menu) => {
    router(menu?.key);
  };

  return (
    <div className={styles.AppLayout}>
      <div className={styles.left}>
        <div className={styles.logo}>测试logo</div>
        <div className={styles.menu}>
          <Menu
            defaultSelectedKeys={defKey ?? ""}
            defaultOpenKeys={
              defKey.split("/").length > 2 ? [`/${defKey.split("/")[1]}`] : []
            }
            inlineIndent={16}
            items={menus}
            mode="inline"
            theme="dark"
            onClick={menuClick}
            onOpenChange={(v) => console.log(v)}
            onSelect={(v) => console.log(v)}
          />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.pageHeader}>{menusP?.[defKey]?.label ?? ""}</div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
