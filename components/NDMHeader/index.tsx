import { MenuItem } from "@/submodules/constants/interface";
import { ExportOutlined } from "@ant-design/icons";
import { Flex } from "antd";
import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import NDMLogo from "../NDMLogo";
import NDMMenu from "../NDMMenu";
import "./styles.scss";

interface Props {
  contextHolder?: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >;
  items: MenuItem[];
  children?: ReactNode;
}
const NDMHeader: FC<Props> = ({ contextHolder, items, children }) => {
  return (
    <header className="header sticky top-0 z-30 shadow bg-white">
      {contextHolder}
      <Flex gap={128}>
        <NDMLogo />
        <NDMMenu items={items} />
      </Flex>
      <div className="flex gap-3 items-center">
        <Link
          to={"/dashboard/alert-system"}
          target="_blank"
          className="font-medium text-[12px] border p-1"
        >
          Alerting
          <ExportOutlined className="pl-2" />
        </Link>
        <Link
          to={"/dashboard/ndm-ticketing/problem-monitoring"}
          target="_blank"
          className="font-medium text-[12px] border p-1"
        >
          Problem Monitoring
          <ExportOutlined className="pl-2" />
        </Link>
        {children}
      </div>
    </header>
  );
};

export default NDMHeader;
