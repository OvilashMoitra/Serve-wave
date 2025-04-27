"use client";
import Contents from "@/components/ui/Contents";
import SideBar from "@/components/ui/Sidebar";
import { localStorageHelper } from "@/helper/credential";
import { useGetAllRoleQuery } from "@/redux/api/roleApi";
// import { isLoggedIn } from "@/services/auth.service";
import { Layout, Row, Space, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userInfo = localStorageHelper.getUserInfo()
  const { data: roles,isLoading:isRoleLoading } = useGetAllRoleQuery(undefined)
  console.log(roles);
  console.log(userInfo);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // let roleId;
    // @ts-ignore
    if (userInfo?.data?._id && userInfo?.data?.role === "5e002e42-37c9-4a96-8f35-275b21cfb255") {
      localStorageHelper.removeFromLocalStorage('BBP_TOKEN')
      router.push("/login");
    }
    // @ts-ignore
    if (!userInfo?.data?._id) {
      localStorageHelper.removeFromLocalStorage('BBP_TOKEN')
      router.push("/login");
    }
    setIsLoading(true);
    // @ts-ignore
  }, [router, isLoading,isRoleLoading,userInfo?.data?._id]);

  if (!isLoading) {
    return (
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Space>
          
          <Spin tip="Loading" size="large"></Spin>
        </Space>

      </Row>
    );
  }

  return (
    <Layout hasSider>
      <SideBar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;