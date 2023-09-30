import { FIRSTNAME, LASTNAME } from "./userConstants";

const initialState = {
    first_name: "amr",
    last_name: "abdelrazek",
}

export default function userReducer(state= initialState, action) {
    switch (action.type) {
        case FIRSTNAME:
            return {
                ...state,
                first_name: action.payload
            }
        case LASTNAME:
            return {
                ...state,
                last_name: action.payload
            }
        default:
            return state
    }        
}