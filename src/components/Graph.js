import React from 'react'
import { Line } from 'react-chartjs-2';
import '../App.css';
import Chart from 'chart.js/auto'
import {data22} from "../assignment_data/60508885da4c96019c357c19_f79e329cf4d13e3613d5a690ef19bfe9"
import {data19} from "../assignment_data/60508885da4c96019c357c19_e1c87eb652bb574c1514fe4bb73836b4"
import {data6} from "../assignment_data/60508885da4c96019c357c19_9ccb329cef9687c204264d7bfb3b602b"
import {data11} from "../assignment_data/60508885da4c96019c357c19_942d8f5d607cec92976a5f6499a9639b"
import {data13} from "../assignment_data/60508885da4c96019c357c19_7220803ba7cf77529402c76beb4a851e"
import {data9} from "../assignment_data/60508885da4c96019c357c19_053e7f44ad299263c30a9f10b654c9cf"
import {data3} from "../assignment_data/60508885da4c96019c357c19_5bbbf028ed7f016278ef4c0cc6ff9003"
import {data8} from "../assignment_data/60508885da4c96019c357c19_35b363ea29f4ad80b03e71e930b85b78"
import {data1} from "../assignment_data/60508885da4c96019c357c19_3e392f9f942b39ce4ac6ea2369d3323d"
import {data10} from "../assignment_data/60508885da4c96019c357c19_89a21ade0e37c501c366b2f552594cd4"
import {data16} from "../assignment_data/60508885da4c96019c357c19_a327cf451f6e74dba770d83746edf8be"
import {data4} from "../assignment_data/60508885da4c96019c357c19_8c3a700e1d2133be21eab6bf616305d2"
import {data18} from "../assignment_data/60508885da4c96019c357c19_de9b0142d9083d7410adfe2734a591fc"
import {data23} from "../assignment_data/60508885da4c96019c357c19_fa2b1aead25a7eb12c6f9dd7c0360e44"
import {data0} from "../assignment_data/60508885da4c96019c357c19_3df38b97ca34a0739a48f54187e97856"
import {data2} from "../assignment_data/60508885da4c96019c357c19_3f37b62d4a3687fe5656dcdc71f07fa4"
import {data7} from "../assignment_data/60508885da4c96019c357c19_9dfeff2a856742918f5225a41063efcc"
import {data12} from "../assignment_data/60508885da4c96019c357c19_0482520d3e5b1076b1f31b27abe9a5a4"
import {data17} from "../assignment_data/60508885da4c96019c357c19_b9879a81a0b17d3be056691d43a88427"
import {data15} from "../assignment_data/60508885da4c96019c357c19_a49e69246bbf030de4a5af2cb3d6e584"
import {data5} from "../assignment_data/60508885da4c96019c357c19_8efaadb0fab68239ed51ff2cc2c55c5f"
import {data21} from "../assignment_data/60508885da4c96019c357c19_f72eddb88c12ceb644a899248b372c96"
import {data20} from "../assignment_data/60508885da4c96019c357c19_e963b8fe97a55d2c45d6fd200bcc39c8"
import {data14} from "../assignment_data/60508885da4c96019c357c19_a5c2d035e7be4bfa18ef6735d2df3a34"

function Graph(props) {
    const {_id , jso} = props
    console.log(jso)
    var or =[]
    var min_band =[]
    var max_band = []
    var time = []
    var forcasted = []
    var anomaly = []
    // datas.map((an)=>{
    //   anomaly.push(an.line_status)
    // })
    jso.map((dat)=>{
        if(dat.line_status !== "0" && dat.line_status !== null)
        {
          anomaly.push(dat.original_value)
        }
        else{
          anomaly.push(null)
        }
        or.push(dat.original_value)
        time.push(dat.timestamp)
    })
    jso.map((dat)=>{
      min_band.push(dat.min_band)
    })
    jso.map((dat)=>{
      max_band.push(dat.max_band)
    })
    jso.map((dat)=>{
      forcasted.push(dat.forecasted_value)
    })
    //console.log(or)
    
    const labels = ["Jan", "Feb", "March", "April", "May" , "June", "July"]
    const data = {
      labels:time,
      datasets: [
        {
        label: 'Max Band',
        data: max_band,
        fill:false,
        type:"line",
        pointRadius:0,
        borderWidth:1,
        borderColor: 'rgb(75, 192, 192)',
        },
        {
          label: 'Anomaly',
          data: anomaly,
          fill:false,
          type:"line",
          borderColor: 'rgb(255, 0, 0)',
          pointRadius:0,
          borderWidth:3

        },
        {
          label: 'Original Value',
          data: or,
          fill:true,
          type:"line",
          pointRadius:0,
          borderWidth:1,
          borderColor: 'rgb(3, 7, 168)',
        },
        
        {
          label: 'Forcasted Value',
          data: forcasted,
          fill:true,
          type:"line",
          borderDash: [10,5] ,
          borderColor: 'rgb(63, 143, 23)',
          pointRadius:0,
          borderWidth:1,
          tension:1
        },
        {
          label:'Min Band',
          data: min_band,
          fill:true,
          pointRadius:0,
          borderWidth:1,
          borderColor: 'rgb(255, 155, 74)'
        }
    ]
    };
    const options = {
        scales:{
            yAxes:[
                {
                    ticks:{
                        beginAtZero:true,
                    }
                }
            ]
        }
      };
    return (
        <div className="chart">
          <Line data={data} option={options}/>
          <p class="small">Id: {_id}</p>            
        </div>
    )
}

export default Graph
