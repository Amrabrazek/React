import { INCREMENT, DECREMENT, INCREMENTBY10 } from  './counterConstants'

export function increment() {
    return{
        type: INCREMENT
    }
}

export function decrement() {
    return{
        type: DECREMENT
    }
}


export function incrementByten() {
    return{
        type: INCREMENTBY10 
    }
}