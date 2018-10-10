import React, {Component} from 'react';
import './index.less'
class Footer  extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='footer'>
                <p>版权所有@2018/10/10,技术来自github:beauty-boy</p>
            </div>
        )
    }
}

export default  Footer