import { combineReducers } from "redux" 
import setCounterData from "./counter"
import getUserDataReducer from "./userData"

const rootReducer=combineReducers({
    setCounterData,
    getUserDataReducer
})

export default rootReducer