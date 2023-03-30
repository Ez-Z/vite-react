import { Menu } from "antd";
import styles from "./index.module.scss";
import { menus, menusP } from "@/Routes";
import { useNavigate, useLocation } from "react-router-dom";
import { useLayoutEffect, useState } from "react";

const GlobalMenu = ({ defKey }: { defKey: string }) => {
  const router = useNavigate();
  const [defOpen, setDefOpen] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const menuClick = (menu: any) => {
    router(menu?.key);
  };

  useLayoutEffect(() => {
    if (menusP?.[defKey]) {
      const { keyPath = [], hideInMenu } = menusP?.[defKey];
      setDefOpen([keyPath[0]]);
      if (hideInMenu) {
        setSelectedKeys([keyPath[keyPath.length - 2]]);
      } else {
        setSelectedKeys([defKey]);
      }
    }
  }, [defKey]);

  return (
    <div className={styles.globalMenu}>
      <Menu
        selectedKeys={selectedKeys}
        openKeys={defOpen}
        inlineIndent={16}
        items={menus}
        mode="inline"
        theme="dark"
        onOpenChange={(v) => setDefOpen(v)}
        onClick={menuClick}
      />
    </div>
  );
};

export default GlobalMenu;
