import React, {Component} from 'react';
import { Row, Col } from 'antd';
import Header from '../components/header'
import SideBar from '../components/sideBar'
import Footer from '../components/footer'
import './index.less'
class Admin  extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='admin'>
                <Row>
                    <Col span={4}>
                        <SideBar></SideBar>
                    </Col>
                    <Col span={20}>
                        <Header></Header>
                        <div className='content'>

                            <div className='content-interlayer'>
                                {this.props.children}
                            </div>
                        </div>
                        <Footer></Footer>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default   Admin