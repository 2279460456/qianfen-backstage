import React, { forwardRef, useState, useEffect } from 'react'
import { Form, Input, Select } from 'antd'
const { Option } = Select;

const UserForm = forwardRef((props, ref) => {
    const { roles, regions, updateDisabled } = props;
    const [isdisabled, setisdisabled] = useState(false);
    useEffect(() => {
        setisdisabled(updateDisabled)
    }, [updateDisabled])
    return (
        <Form
            layout="vertical"  //表单布局
            name="add_user"   //表单名称，会作为表单字段 id 前缀使用
            ref={ref}
        >
            <Form.Item
                name="username"
                label="用户名"
                rules={[
                    {
                        required: true,
                        message: 'Please input the title of collection!',
                    },
                ]}
            >
                <Input type="textarea" />
            </Form.Item>
            <Form.Item
                name="password"
                label="密码"
                rules={[
                    {
                        required: true,
                        message: 'Please input the title of collection!',
                    },
                ]}>
                <Input type="textarea" />
            </Form.Item>
            <Form.Item
                name="region"
                label="区域"

                rules={isdisabled === true ? [] : [
                    {
                        required: true,
                        message: 'Please input the title of collection!',
                    },
                ]}>
                <Select disabled={isdisabled} >
                    {/* <Option value="jack">Jack</Option> */}
                    {
                        regions.map(item => <Option value={item.value} key={item.id}>{item.title}</Option>)
                    }
                </Select>
            </Form.Item>
            <Form.Item
                name="roleId"
                label="角色"
                rules={[
                    {
                        required: true,
                        message: 'Please input the title of collection!',
                    },
                ]}>
                {/* 给select绑定一个onChange事件，如果内容改变，则会将改变后的内容作为参数发给回调函数 */}
                <Select onChange={(value) => {
                    if (value === 1) { //1表示超级管理员
                        ref.current.setFieldsValue({
                            region: ''      // 将region项修改为空
                        })
                        setisdisabled(true);
                    } else {
                        setisdisabled(false);
                    }
                }}>
                    {
                        roles.map(item => <Option value={item.id} key={item.id}>{item.roleName}</Option>)
                    }
                </Select>
            </Form.Item>
        </Form >
    )
})

export default UserForm