import React, {Component} from 'react';
import  {Link} from 'react-router-dom';
import { Menu, Icon } from 'antd';
import './index.less';
const SubMenu = Menu.SubMenu;
class SideBar   extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='wrapper'>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="首页">
                        <Link to='/admin/home'>
                            <Icon type="pie-chart" />
                            首页
                        </Link>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>订单管理</span></span>}>
                            <Menu.Item key="1">
                                <Link to='/admin/order_demo'>订单处理</Link>
                            </Menu.Item>
                            <SubMenu key="sub3" title="用户图例">
                                <Menu.Item key="2">
                                    <Link to='/admin/secondPage'>饼图</Link>
                                </Menu.Item>
                            </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

export default  SideBar