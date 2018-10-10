import React, {Component} from 'react';
import  {Link} from 'react-router-dom';
import { Menu, Icon } from 'antd';
import './index.less';
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
                    mode="vertical"
                    theme="dark"
                >
                    <Menu.Item key="首页">
                        <Link to='/admin/home'>
                            <Icon type="pie-chart" />
                            首页
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="第二页">
                        <Link to='/admin/secondPage'>
                            <Icon type="desktop" />
                            第二页
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default  SideBar