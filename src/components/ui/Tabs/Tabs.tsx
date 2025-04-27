"use client";
import { Tabs, TabsProps } from 'antd';

type IDynamicTabProps = {
    items: TabsProps['items'],
    onChange: TabsProps['onChange'],
}


const DynamicTabs = ({items,onChange}:IDynamicTabProps) => {
    return (
        <Tabs
            style={{ color: 'white', fontSize: "bold", textShadow: "revert-layer" }}
            defaultActiveKey="1" items={items} onChange={onChange} />
    );
};

export default DynamicTabs;