import { DECREASE_COUNTER, INCREASE_COUNTER } from "../constant/constant"

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

