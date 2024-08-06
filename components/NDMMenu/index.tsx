import { MenuItem } from "@/constants/interface";
import { ROUTER_LIST } from "@/routers/RouterList";
import { ConfigProvider, Menu } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import MenuItems from "./components/MenuItems";
import "./styles.scss";

interface Props {
  items: MenuItem[];
}
const NDMMenu: FC<Props> = ({ items }) => {
  const navigate = useNavigate();
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            colorPrimary: "black",
          },
        },
      }}
    >
      <Menu
        onClick={(e) => navigate(e.key)}
        mode="horizontal"
        className="ndm-menu min-w-[220px]"
        defaultSelectedKeys={[ROUTER_LIST?.["overview"]?.path]}
      >
        <MenuItems menuItems={items as MenuItem[]} />
      </Menu>
    </ConfigProvider>
  );
};

export default NDMMenu;
