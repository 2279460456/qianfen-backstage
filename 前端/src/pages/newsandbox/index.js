import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

//组件
import SideMeau from '../../component/sandbox/sidemenu'
import TopHeader from '../../component/sandbox/topheader'
import Home from './home/Home'
import UserList from './user-manage/UserList'
import RoleList from './right-manage/RoleList/RoleList'
import RightList from './right-manage/RightList/RightList'
import NotFound from '../../component/notfound'

//引入css样式
import './index.css'

//antd
import { Layout } from 'antd';
const { Content } = Layout;

export default function SandBox() {
    return (
        <Layout>
            <SideMeau></SideMeau>
            <Layout className="site-layout">
                <TopHeader></TopHeader>
                {/* overflow:auto使内容过多时不撑开主页内容，而是撑开content组件内容 */}
                <Content className="site-layout-background" style={{ margin: '24px 16px', padding: 24, minHeight: 280, overflow: 'auto' }}>
                    <Routes>
                        <Route path='/home' element={<Home />} />
                        <Route path='/user-manage/list' element={<UserList />} />
                        <Route path='/right-manage/role/list' element={<RoleList />} />
                        <Route path='/right-manage/right/list' element={<RightList />} />
                        <Route path='/' element={<Navigate replace from='/' to='/home'></Navigate>} />
                        <Route path='/*' element={<NotFound />} />
                    </Routes>
                </ Content>
            </ Layout >
        </ Layout >
    )
}
