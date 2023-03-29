import { Menu } from "antd";
import styles from "./index.module.scss";
import { menus } from "@/Routes";
import { useNavigate } from "react-router-dom";

const GlobalMenu = ({ defKey }: { defKey: string }) => {
  const router = useNavigate();
  const menuClick = (menu: any) => {
    router(menu?.key);
  };

  return (
    <div className={styles.globalMenu}>
      <Menu
        selectedKeys={[defKey]}
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
  );
};

export default GlobalMenu;
