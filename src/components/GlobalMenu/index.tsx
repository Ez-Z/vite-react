import { Menu } from "antd";
import styles from "./index.module.scss";
import { menus } from "@/Routes";
import { useNavigate } from "react-router-dom";
import storage from "good-storage";

const GlobalMenu = ({ defKey }: { defKey: string }) => {
  const router = useNavigate();
  const menuClick = (menu: any) => {
    storage.session.set("keyPath", menu.keyPath);
    router(menu?.key);
  };
  const keyPath = storage.session.get("keyPath");

  return (
    <div className={styles.globalMenu}>
      <Menu
        selectedKeys={[defKey]}
        defaultOpenKeys={
          keyPath ? [keyPath?.[keyPath.length - 1]] : [menus?.[0]?.key]
        }
        inlineIndent={16}
        items={menus}
        mode="inline"
        theme="dark"
        onClick={menuClick}
      />
    </div>
  );
};

export default GlobalMenu;
