import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCounter, increaseCounter } from '../redux/action/counter'
import './counter.css'

const Counter = () => {
   
    const dispatch=useDispatch();
    const count=useSelector((state)=>state?.setCounterData?.count)
  return (
    <div className='counter_box'>
       <p style={{fontSize:30}}>{count}</p>
       <button onClick={()=>dispatch(decreaseCounter())}>Decrease</button> &nbsp;
       <button onClick={()=>dispatch(increaseCounter())}>Increase</button>
    </div>
  )
}

export default Counter