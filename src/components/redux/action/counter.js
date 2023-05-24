import { DECREASE_COUNTER, FETCH_POST, INCREASE_COUNTER } from "../constant"

export const increaseCounter=()=>{
    return{
       type:INCREASE_COUNTER,
    }
}

export const decreaseCounter=()=>{
    return{
       type:DECREASE_COUNTER,
    }
}

