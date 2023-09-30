import { FETCH_ELEMENT_SUCCESS, FETCH_ELEMENT_FAILURE } from "./postsConstants"
    
const fetchElementSuccess = (data) => ({
    type: FETCH_ELEMENT_SUCCESS,
    payload: data,
});

const fetchElementFailure = (error) => ({
    type: FETCH_ELEMENT_FAILURE,
    payload: error,
});

export function fetchPost (nextOrPrevious){
    return (dispatch, getState) => {
        const currentState = getState();
        const currentElementId = currentState.post.data.id
        if (nextOrPrevious === "next")
        {
            var targetElementID = currentElementId + 1
        }
        else
        {
            targetElementID = currentElementId - 1
        }

        fetch(`https://jsonplaceholder.typicode.com/todos/${targetElementID}`)
        .then((response) => {
            if (!response.ok) {
            throw new Error("Request failed"); // Manually throw an error if the response is not ok
            }
            return response.json();
        })
        .then((data) => {
            // Dispatch success action
            dispatch(fetchElementSuccess(data));
        })
        .catch((error) => {
            // Dispatch error action
            dispatch(fetchElementFailure(error));
        });

        
    };
    };


// These action creators represent the different stages of the asynchronous operation.