"use client";

import { useState } from "react";
import { Layout, Menu } from "antd";

import { sidebarItems } from "@/constants/sidebarItems";
import { USER_ROLE } from "@/constants/role";
import { localStorageHelper } from "@/helper/credential";

const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const userInfo = localStorageHelper.getUserInfo()
  function getRoleNameById(id: string): string {
    
    switch (id) {
        case "db0679fd-bb88-47f0-98c3-1b02df17a41d":
            return USER_ROLE.HR;
            
        case "89898hhu98":
            return USER_ROLE.SUPER_ADMIN;
        case "3bc1e0ab-2a2a-4590-8f44-5b9d0871670d":
            return USER_ROLE.CONTENT_MANAGER;
        case "5e002e42-37c9-4a96-8f35-275b21cfb255":
            return USER_ROLE.USER;
        case "00fd2d84-fb6a-43c3-9c0b-8b55c337e045":
            return USER_ROLE.PRODUCT_MANAGER;
        default:
            return USER_ROLE.USER;
    }
}

  // @ts-ignore
  const role = getRoleNameById(userInfo?.data?.role);
  console.log(role);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        Serve wave
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default SideBar;
