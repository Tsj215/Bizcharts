import React, {Component} from "react";
import {Chart, Axis, Geom, Legend, Tooltip} from 'bizcharts'
import {Button} from 'antd'
import './index.css'


export default class Charts extends Component {
    render() {
        const data = [
            {
                year: '2019/03',
                count: 12
            },
            {
                year: '2019/04',
                count: 17
            },
            {
                year: '2019/05',
                count: 8
            },
            {
                year: '2019/06',
                count: 6
            },
            {
                year: '2019/07',
                count: 5
            },
            {
                year: '2019/08',
                count: 2
            }
        ]

        const cols = {
            count: {
                tickInterval: 5
            }
        };
        return (
            <div className='container'>
                <div className='button'>
                    <Button style={{marginLeft:80}}>本月</Button>
                    <Button style={{marginLeft:16,marginRight:16}}>一月内</Button>
                    <Button>一年内</Button>
                </div>
                <Chart className='charts' height={400} width={1200} data={data} scale={cols}>
                    <Axis name='year'/>
                    <Axis name='count' grid={{lineStyle:{lineDash:[0,0]}}}/>
                    <Tooltip/>
                    <Geom position='year*count' size={40}/>
                </Chart>
            </div>

        )
    }
}
