import React, { useEffect, useState } from 'react'
import './index.css'; //引入样式
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom'
import { Layout, Menu } from 'antd'; //antd
import {
  HomeOutlined
} from '@ant-design/icons';
const { Sider } = Layout;
const { SubMenu } = Menu;

const icons = {
  "/user-manage": <HomeOutlined />,
  "/user-manage/list": <HomeOutlined />
}

export default function SideMeau() {

  let navigate = useNavigate(); //路由跳转
  let location = useLocation();
  let [menu, setMenu] = useState([]);
  const selectKeys = [location.pathname]; //获取当前路由
  const openKeys = ['/' + location.pathname.split('/')[1]];
  useEffect(() => {
    axios.get("http://localhost:5000/rights?_embed=children").then(
      (res) => {
        setMenu(res.data);
      },
      (err) => {
        console.log(err);
      }
    )
  }, [])

  const is_pagepermisson = (item) => {
    return item.pagepermisson === 1;
  }

  //渲染组件函数
  const renderMenu = (menuList) => {
    return menuList.map(item => {
      if (item.children?.length > 0 && is_pagepermisson(item)) {    //?.运算符只有item.children存在才会判断其是否有length属性
        return <SubMenu key={item.key} icon={icons[item.key]} title={item.title}>
          {renderMenu(item.children)}
        </SubMenu>
      }
      //渲染每一个侧边栏子项
      else if (is_pagepermisson(item)) {
        return <Menu.Item key={item.key} icon={icons[item.key]} onClick={() => { navigate(item.key) }}>
          {item.title}
        </Menu.Item>
      }
    })
  }

  return (
    //callapsible表示可折叠
    <Sider trigger={null} collapsible >
      {/* 侧边栏项数展开以后如果超出屏幕最大高度,则出现滚动条 */}
      <div style={{ display: 'flex', height: '100%', "flexDirection": "column" }}>
        <div className="logo"  > 全球新闻发布导航系统 </ div>
        {/* 侧边栏项数展开以后如果超出屏幕最大高度,则出现滚动条 */}
        <div style={{ flex: 1, "overflow": "auto" }}>
          {/* defaultSelectedKeys属性默认高亮的侧边栏选项  defaultOpenKeys属性为默认打开侧边栏子选项的父选项 */}
          <Menu theme="dark" mode="inline" defaultOpenKeys={openKeys} defaultSelectedKeys={selectKeys}>
            {
              renderMenu(menu)  //动态渲染组件
            }
          </Menu>
        </div>
      </div>
    </Sider>
  )
}
