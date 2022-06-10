import React from 'react'
import { ADDCounter, AddCounter, multiplyCounter, subractCounter } from "../redux/action";
import { reduceCounter } from '../redux/action';
import { store } from "../redux/store";
import { useDispatch,useSelector } from "react-redux";
import { useState } from 'react';

const Counter = () => {
    const dispatch=useDispatch();
    const counter=useSelector((store)=>store.counter);
    const[text,setText]=useState();

  return (
    <div>
        <div>Counter:{counter}</div>
        <input type="text" onChange={(e)=>setText(e.target.value)}></input>
        <button onClick={()=>{
          dispatch(AddCounter(1))
        }}>ADD BY ONE</button>
        <button onClick={()=>{
          dispatch(reduceCounter(1))
        }}>REDUCE BY ONE</button>
         <button onClick={()=>{
          dispatch(ADDCounter(text))
        }}> ADD</button>
         <button onClick={()=>{
          dispatch(multiplyCounter(text))
        }}>MULTIPLY</button>
         <button onClick={()=>{
          dispatch(subractCounter(text))
        }}>SUBRACT</button>
    </div>
  )
}

export default Counter