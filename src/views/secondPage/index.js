import React, {Component} from 'react';
import './index.less';
import {Card} from 'antd';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/legend';
import ReactEcharts from 'echarts-for-react';
class SecondPage  extends Component {
    constructor(props) {
        super(props)
    }
    pie1 = {
        title : {
            text: '用户骑行订单',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'right',
            data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        series : [
            {
                name: '骑行订单',
                type: 'pie',
                radius : '80%',
                center: ['50%', '60%'],
                data:[
                    {value:500, name:'周一'},
                    {value:600, name:'周二'},
                    {value:400, name:'周三'},
                    {value:600, name:'周四'},
                    {value:200, name:'周五'},
                    {value:1000, name:'周六'},
                    {value:900, name:'周日'},
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }
    pie2 = {
        title : {
            text: '用户骑行订单',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'right',
            data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        series : [
            {
                name: '骑行订单',
                type: 'pie',
                radius : ['60%', '80%'],
                center: ['50%', '60%'],
                data:[
                    {value:500, name:'周一'},
                    {value:600, name:'周二'},
                    {value:400, name:'周三'},
                    {value:600, name:'周四'},
                    {value:200, name:'周五'},
                    {value:1000, name:'周六'},
                    {value:900, name:'周日'},
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }

    render() {
        return (
            <div className='second-page'>
                <Card title='饼图一:'>
                    <ReactEcharts
                    option={this.pie1}
                    lazyUpdate={true}
                    >
                    </ReactEcharts>
                </Card>
                <Card title='饼图二:'>
                    <ReactEcharts
                        option={this.pie2}
                        lazyUpdate={true}
                    >
                    </ReactEcharts>
                </Card>
            </div>
        )
    }
}

export default   SecondPage