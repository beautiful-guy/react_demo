import React, {Component} from 'react';
import './index.less';
import {Link} from 'react-router-dom';
class DetailHeader  extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='detail-header clearfloat'>
                <div className='detail-name fll'>
                    <span>共享单车后台系统</span>
                </div>
                <div className='detail-userinfo flr'>
                        <span>你好，ycy</span>
                        <Link to='/admin/home'>
                            <span className='logout'>退出</span>
                        </Link>
                </div>
            </div>
        )
    }
}

export default   DetailHeader