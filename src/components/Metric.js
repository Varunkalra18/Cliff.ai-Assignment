import React from 'react'
import '../App.css';
// import {data} from "../assignment_data/60508885da4c96019c357c19_f79e329cf4d13e3613d5a690ef19bfe9"
import Graph from "./Graph"
function Metric(props) {
    const {_id, measure, dimension} = props
    return (
        <div>
        <h4 className="pt-5">Type {measure}</h4>
        {dimension.map((dim)=>{
            return (<div className="pt-5">{dim.name} : {dim.value}</div>)
        })}   
        
        </div>
    )
}

export default Metric
