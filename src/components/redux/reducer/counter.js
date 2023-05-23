import { DECREASE_COUNTER, INCREASE_COUNTER } from "../constant/constant";

const initialState = {
    count: 0,

};

export default function setCounterData(state = initialState, action) {

    switch (action.type) {
        case INCREASE_COUNTER:
            let incr = state.count;
            return {
                ...state,
                count: incr + 1,
            };
            break;

        case DECREASE_COUNTER:
            let decr = state.count;
            return {
                ...state,
                count: decr - 1,
            };
            break;


        default:
            return state;
    }
}
