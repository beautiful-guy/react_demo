import React, {Component} from 'react';
import pig from '../../imgs/猪.gif';
import {Link} from 'react-router-dom';
import './index.less'
class NotMatch  extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='notMatch'>
                <div className='notleft'>
                    <h1>404 NOT FOUND!!!</h1>
                    <Link to='/admin'>退出</Link>
                </div>
                <div className='notright'>
                    <img src={pig} alt=""/>
                </div>
            </div>
        )
    }
}

export default  NotMatch