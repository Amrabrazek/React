import { FETCH_ELEMENT_SUCCESS, FETCH_ELEMENT_FAILURE } from "./postsConstants";

const initialState = {
    data: {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
        },
    error: null
    }

export default function postReducer(state= initialState, action) {
    switch (action.type) {
        case FETCH_ELEMENT_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case FETCH_ELEMENT_FAILURE:
            return {
                ...state,
                error:action.payload
            }
        default:
            return state
    }        
}