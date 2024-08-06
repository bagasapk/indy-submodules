import { IcChevronRight } from "@/components/Icons";
import { MenuItem } from "@/constants/interface";
import { Menu } from "antd";
import React, { FC } from "react";

interface Props {
  menuItems?: (MenuItem | null)[];
}
const MenuItems: FC<Props> = ({ menuItems }) => {
  return menuItems?.map((item) => {
    if (item?.children?.length ?? 0 > 0) {
      return item?.type === "group" ? (
        <Menu.ItemGroup key={item.key} title={item.label}>
          <MenuItems menuItems={item?.children} />
        </Menu.ItemGroup>
      ) : (
        <Menu.SubMenu
          className={item?.key.toString()}
          key={item?.key}
          title={
            <div className="flex items-center">
              {item?.label}
              <IcChevronRight className="h-fit rotate-90 px-2" width={"6"} />
            </div>
          }
          icon={item?.icon}
        >
          <MenuItems menuItems={item?.children} />
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item
        className={item?.key.toString()}
        key={item?.key}
        icon={item?.icon}
      >
        {item?.label}
      </Menu.Item>
    );
  });
};

export default MenuItems;
