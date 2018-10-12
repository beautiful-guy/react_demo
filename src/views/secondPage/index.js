import React, {Component} from 'react';
import './index.less';
import {Card} from 'antd';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/legend';
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
            left: 'left',
            data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series : [
            {
                name: '骑行订单',
                type: 'pie',
                radius : '55%',
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

                </Card>
            </div>
        )
    }
}

export default   SecondPage