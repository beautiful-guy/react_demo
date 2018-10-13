import React, {Component} from 'react';
import DetailHeader from '../../components/detailHeader';
import {Card,message} from 'antd';
import './index.less';
import Axios from '../../axios';
class MapPage  extends Component {
    constructor(props) {
        super(props)
    }
    getData = ()=>{
        let id = this.props.match.id;
        Axios.get('/order/detail',{id:id}).then(res=>{
            if(res.code == 0){
                this.initMap(res.result);
            }else {
                message.info('数据请求失败!')
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    initMap = (result)=>{
        const BMap = window.BMap
        this.map = new BMap.Map("mapDetail");          // 创建地图实例
        const point = new BMap.Point(116.404, 39.915);  // 创建点坐标
        this.map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
        this.map.enableScrollWheelZoom(true);
        this.addContainer();
        this.drawPllyline(result.position_list);
        this.drawBmapArea(result.area);
    }
    addContainer = ()=>{
        const BMap = window.BMap;
        const map = this.map;
        map.addControl(new BMap.NavigationControl()); //平移缩放控件，PC端默认位于地图左上方的功能。移动端提供缩放控件，默认位于地图右下方
        map.addControl(new BMap.ScaleControl());    //比例尺
        map.addControl(new BMap.OverviewMapControl());//缩略地图，默认位于左下角，为毛我没看到
        map.addControl(new BMap.MapTypeControl());//地图类型 ，有普通地图、卫星、三维
        map.setCurrentCity("北京"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用
    }
    //绘制折线
    drawPllyline = (position_list)=>{
        const BMap = window.BMap;
        const map = this.map;
        const startPoint = position_list[0];
        const endPoint = position_list[(position_list.length - 1)];
        const startBmapPoint = new BMap.Point(startPoint.lon,startPoint.lat);
        const endBmapPoint = new BMap.Point(endPoint.lon,endPoint.lat);

        let allBmapPoint = position_list.map(item=>{
            return (new BMap.Point(item.lon,item.lat))
        })
        const startIcon = new BMap.Icon("/icons/start.png", new BMap.Size(50, 50), {
            imageSize : new  BMap.Size(50,50)
        });
        const endIcon = new BMap.Icon("/icons/end.png", new BMap.Size(50, 50), {
            imageSize : new  BMap.Size(50,50)
        });
        const startMarker = new BMap.Marker(startBmapPoint,{icon:startIcon});        // 创建起点标注
        const endMarker = new BMap.Marker(endBmapPoint,{icon:endIcon});             //创建终点标注
        map.addOverlay(startMarker);                     // 将标注添加到地图中
        map.addOverlay(endMarker);
    const polyline = new BMap.Polyline(allBmapPoint,
            {strokeColor:"blue", strokeWeight:6, strokeOpacity:0.5});
        map.addOverlay(polyline);
    }
    drawBmapArea = (area)=>{
        const BMap = window.BMap;
        const map = this.map;
        let allAreaPoint = area.map(item=>{
            return (new BMap.Point(item.lon,item.lat))
        })
        const polygon = new BMap.Polygon(allAreaPoint,{
            strokeColor:'yellow',
            fillColor:'#addbe8',
            strokeWeight:'4',
            fillOpacity:'.5'
        })
        map.addOverlay(polygon);
    }
    componentDidMount(){
        this.getData();
    }
    render() {
        return (
            <div>
                <div>
                    <DetailHeader></DetailHeader>
                </div>
                <Card>
                    <div id='mapDetail' className='newMap'>

                    </div>
                </Card>
            </div>
        )
    }
}

export default  MapPage