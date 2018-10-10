import React, {Component} from 'react';
import './index.less';
import {Link} from 'react-router-dom';
import utils from '../../utils';
import Axios from 'axios';
const timedata = utils.formDate;
class Header  extends Component {
    constructor(props) {
        super(props);
    }
    state ={
        time:'2018/10/10',
        weather:'今天天气很冷'
    }
    getTime(){
        setInterval(()=>{
            let current = new Date().getTime();
            let currentTime = timedata(current)
            this.setState({
                time:currentTime
            })
        },1000)
    }
    getWetherData(){
        Axios.get('http://t.weather.sojson.com/api/weather/city/101010700').then(res=>{
            let currentWether = res.data.data.forecast[0];
            const wetherData = `${currentWether.type}-${currentWether.fx}-${currentWether.low}-${currentWether.high}`
            this.setState({
                weather:wetherData
            })
        })
    }
    componentWillMount(){
        this.getTime();
        this.getWetherData();
    }
    render() {
        return (
            <div className='outter'>
                <div className='header-wrapper'>
                    <div className='userinfo clearfix'>
                        <span>您好,</span>
                        <span>张怡宁大魔王</span>
                        <Link to='/admin/home'><span className='logout'>退出</span></Link>
                    </div>
                </div>
                <div className="weather-wrapper clearfix">
                    <div className='left fll'>
                        <span>首页</span>
                    </div>
                    <div className="right flr">
                        <p className='fll'>{this.state.time}</p>
                        <p className='fll'>{this.state.weather}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default   Header