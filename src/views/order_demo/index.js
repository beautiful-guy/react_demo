import React, {Component} from 'react';
import './index.less';
import Axios from '../../axios';
import {Select,Card,DatePicker,Button ,Table,message,Modal} from 'antd';
const Option = Select.Option;
class  Order_demo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city:'',
            date:{},
            order_status:'',
            orderData:[],
            total:'',
            pageSize:'',
            isLoading:false,
            selectedItem:{},
            selectedIndex:{},
            visible: false,
            endItem:{}
        }
    }
    cityOptions=[
        {
            value:'北京',
            label:'北京'
        },
        {
            value:'上海',
            label:'上海'
        },
        {
            value:'广州',
            label:'广州'
        },
        {
            value:'深圳',
            label:'深圳'
        }
    ]
    orderState = [
        {
            value:'未完成',
            label:'未完成'
        },
        {
            value:'正在进行',
            label:'正在进行'
        },
        {
            value:'已完成',
            label:'已完成'
        }
    ]

    getCity = (value)=>{
        this.setState({
            city:value
        })
    }
    getOrder = (value)=>{
        this.setState({
            order_status:value
        })
    }
    onChange=(date, dateString)=>{
        let obj = {};
        obj.date = date;
        obj.dateString = dateString;
        this.setState({
            date:obj
        })
    }
    handleQuery = ()=>{
        console.log(this.state)
    }
    params = {
        pn:1
    }
    getOrderData = ()=>{
        this.setState({
            isLoading:true
        })
        Axios.get('/order/list',this.params).then(res=>{
            if(res.code == 0){
                this.setState({
                    orderData:res.result.item_list.map((item,index)=>{
                        item.key = index;
                        return item;
                    }),
                    total:res.result.total_count,
                    pageSize:10,
                    isLoading:false
                })
            }else {
                message.info('数据请求失败!')
            }
        })
    }
    endOrder = ()=>{
        let selectedItem = this.state.selectedItem[0];
        if(selectedItem){
            Axios.get('/order/ebike_info',{id:selectedItem.id}).then(res=>{
                if(res.code == 0){
                    this.setState({
                        endItem:res.result,
                        visible:true
                    })
                }else {
                    message.info('数据请求失败')
                }
            }).catch(err=>{
                console.log(err)
            })
        }else {
            message.info('请选择要结束的订单')
        }
    }
    //用户已决定取消订单
    handleOk = (e) => {
        let selectedItem = this.state.selectedItem[0];
        Axios.get('/order/finish_order',{id:selectedItem.id}).then(res=>{
            if(res.code == 0){
                message.info('取消订单成功!');
                this.setState({
                    visible: false,
                });
                this.getOrderData();
            }else {
                message.info('取消订单失败!')
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    //用户临时改变取消订单的主意
    handleCancel = (e) => {
        // console.log(e);
        this.setState({
            visible: false,
        });
    }
    componentWillMount(){
        this.getOrderData()
    }
    render() {
        const  pagination = {
                total:this.state.total,
                pageSize:this.state.pageSize,
                onChange:(index)=>{
                    this.params.pn = index;
                    this.getOrderData()
                }
            }
        const rowSelection = {
            type:'radio',
            onChange:(selectedRowKeys, selectedRows)=>{
                this.setState({
                    selectedItem:selectedRows,
                    selectedIndex:selectedRowKeys
                })
            }
        }
        const columns = [
            {
                title:'订单编号',
                dataIndex:'order_sn',
                key: 'order_sn'
            },
            {
                title: '车辆编号',
                dataIndex: 'bike_sn',
                key: 'bike_sn'
            },
            {
                title: '用户名',
                dataIndex: 'user_name',
                key: 'user_name'
            },
            {
                title: '手机号',
                dataIndex: 'mobile',
                key: 'mobile'
            },
            {
                title: '里程',
                dataIndex: 'distance',
                render(distance){
                    return distance/1000 + 'Km';
                },
                key: 'distance'
            },
            {
                title: '行驶时长',
                dataIndex: 'total_time',
                key: 'total_time'
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status'
            },
            {
                title: '开始时间',
                dataIndex: 'start_time',
                key: 'start_time'
            },
            {
                title: '结束时间',
                dataIndex: 'end_time',
                key: 'end_time'
            },
            {
                title: '订单金额',
                dataIndex: 'total_fee',
                key: 'total_fee'
            },
            {
                title: '实付金额',
                dataIndex: 'user_pay',
                key: 'user_pay'
            }
        ]

        return (
            <div className='order-demo'>
                <Card>
                    <div className='demo-top'>
                        <div className='city'>
                            <span className='pr10'>城市:</span>
                            <Select  style={{ width: 150 }} onChange={this.getCity}>
                                {this.cityOptions.map(item=>{
                                    return (
                                        <Option value={item.value} key={item.value}>{item.label}</Option>
                                    )
                                })}
                            </Select>
                        </div>
                        <div className='timeDate'>
                            <span className='pr10'>订单时间:</span>
                            <DatePicker style={{width:250}} onChange={this.onChange} />
                        </div>
                        <div className='order-state'>
                            <span className='pr10'>订单状态:</span>
                            <Select  style={{ width: 150 }} onChange={this.getOrder}>
                                {this.orderState.map(item=>{
                                    return (
                                        <Option value={item.value} key={item.value}>{item.label}</Option>
                                    )
                                })}
                            </Select>
                        </div>
                    </div>
                    <div className='btn-wrapper'>
                        <Button type='primary' onClick={this.handleQuery}>查询</Button>
                    </div>
                </Card>
                <Card>
                    <div className='two-btn'>
                        <Button type='primary'>订单详情</Button>
                        <Button className='btn2' type='primary' onClick={this.endOrder}>结束订单</Button>
                        <Modal
                            title="结束订单"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
                            <ul className='someData'>
                                <li>
                                    <span>车辆编号:</span>
                                    {this.state.endItem.bike_sn}
                                </li>
                                <li>
                                    <span>剩余电量:</span>
                                    {this.state.endItem.battery}
                                </li>
                                <li>
                                    <span>行程时间:</span>
                                    {this.state.endItem.start_time}
                                </li>
                                <li>
                                    <span>目的地:</span>
                                    {this.state.endItem.location}
                                </li>
                            </ul>
                        </Modal>
                    </div>
                </Card>
                <Card>
                    <div className='table-warpper'>
                        <Table columns={columns}
                               pagination={pagination}
                               loading={this.state.isLoading}
                               dataSource={this.state.orderData}
                               rowSelection={rowSelection}
                        ></Table>
                    </div>
                </Card>
            </div>
        )
    }
}

export default  Order_demo