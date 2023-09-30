import { INCREMENT, DECREMENT, INCREMENTBY10 } from "./counterConstants";

const initialState = {
    value: 0,
}

export default function counterReducer(state= initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + 1 
            }
        case DECREMENT:
            return {
                ...state,
                value: state.value - 1
            }
        case INCREMENTBY10:
            return {
                ...state,
                value: state.value + 10
            }
        default:
            return state
    }        
}