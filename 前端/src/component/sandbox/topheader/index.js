import React, { useState } from 'react'
//antd
import { Layout, Menu, Dropdown, Avatar } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined
} from '@ant-design/icons';
const { Header } = Layout;

export default function Topheader() {
    const [collapsed, setcollapsed] = useState(false);
    const changeCollapsed = () => {
        setcollapsed(!collapsed);
    }

    const menu = (
        <Menu>
            <Menu.Item>
                超级管理员
            </Menu.Item>
            <Menu.Item danger>退出登录</Menu.Item>
        </Menu>
    );
    return (
        <Header className="site-layout-background" style={{ padding: " 0 16px" }}>
            {/* {{
                React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: this.toggle,
                })
            }} */}
            {
                collapsed ? <MenuUnfoldOutlined onClick={changeCollapsed} /> : < MenuFoldOutlined onClick={changeCollapsed} />
            }
            <div style={{ float: "right" }}>
                <span style={{ margin: "0 5px 0 0" }}>欢迎admin回来</span>
                <Dropdown overlay={menu}>
                    <Avatar size="large" icon={<UserOutlined />} />
                </Dropdown>
            </div>
        </Header >
    )
}
