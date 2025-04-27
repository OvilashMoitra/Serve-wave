import { Button, Col, Row } from "antd";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export const metadata: Metadata = {
    title: 'Page Not Found',
    description: 'This page could not be found.'
}
  
const notFound = () => {
    return (
        <div
            style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                background: "#fff",
                width: "100vw",
                height: "100vh",
            }}
        >
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <Image
                    src="https://i.ibb.co/j54mTX2/3828559.jpg"
                    alt="404"
                    width={500}
                    height={500}
                />
                <Button
                    style={{
                        backgroundColor: "#1890ff",
                    }}
                    type="primary" size={"middle"}>
                    <Link href="/">Go to Home Page</Link>
                </Button>
            </div>
        </div>
    );
};

export default notFound;