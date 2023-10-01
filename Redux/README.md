# Redux

## Introduction

Imagine you have a toy box with many toys inside. Each toy represents a piece of information, like your name, age, or favorite color. Sometimes, different parts of your room want to know about these toys and play with them. But instead of going to your toy box directly, they can ask your parents.

In this example, your parents are like Redux. They help manage and share the toys (information) with different parts of your room (your app). 

## How Redux Works

### a Room (Store)

The Room is where all our boxes (information) are stored. It's called the store in Redux.

### Boxes (State)

Each box represents a piece of information, like your name, age, or favorite color. In Redux, we call this information the state. The state is what gets stored in the room (store).

### Parents (Reducers)

Your parents are like reducers in Redux. They are responsible for taking care of the boxes (state) and making sure they go to the right places when someone asks for them. For example, if someone wants to know your age, your parents will get the age box (state) from the room (store) and give it to them.

### Asking for Toys (Actions)

When someone wants to change information with a specific box (state), they can ask for it. In Redux, we call this asking for boxes actions. Actions are like requests for specific information. For example, if we want to change an information like your age from 5 to 6 we say "Increment" This request is an action.

### Parents' Plan (Action Creators)

Sometimes, your parents need a plan to understand what box (state) someone is asking for. They use action creators to create a plan. An action creator is like a note that says, "Please give me the box with the name 'favorite color'." This plan helps your parents understand what box (state) to give when someone asks.

### Sharing boxes (Dispatch)

When your parents have the box (state) that someone asked for, they share it with them. In Redux, we call this sharing boxes dispatching. They give the box (state) to the person who asked for it.

## Conclusion

Redux is a powerful tool that helps manage and share information in an organized way, just like your parents help manage and share your boxes .


## Examples

### Example1

In this example we have a state (box) called count on which we want to apply some actions (increment, decrement, incrementByten).
Assume it's the number of toys in the room.

### Declare the store and the state

We have a state (a box represnting the number of toys in the room) which carry information called count 
the state (box) is stored in the store (room)

source: ./src/app/store.js
```
// Store (room)
const store = combineReducers({
    count: counterReducer,  //----> state(a box represnting the number of toys)
    user: userReducer,
    post: postReducer
    });
export default createStore(store, composeWithDevTools(applyMiddleware(thunk)))
````

### Decalre Actions (Asking for Toys)

This is how we name what we want to do with the information carried by the state (what to do with the toy)
We can also call it rules to play with toys

source: ./src/features/counter/counterConstanats.js
```
// Actions 
export const INCREMENT = 'INCREMENT'  //increase the number of toys and accordinglly change the box that carry the count 
export const DECREMENT = 'DECREMENT'
export const INCREMENTBY10 = 'INCREMENTBY10'
```

### Declare Actions Creators (Parents' Plan)

I tell the parent what to do with the (state) 

source: ./src/features/counter/counterActions.js
```
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
```

### Dispatching 

when someone ask for a toy from the room 
there for the number of toys changed and the box representing the count should also chaneg
Dispatching an action is like telling Redux to follow one of the rules by which the box will be changed and this is done in our components 

source: ./src/features/counter/Counter.js
```
const Counter = ({count, increment, decrement, incrementByten}) => {
    return (
        <div>
            <h1>Counter</h1>
            <p>The current count is {count}</p>
            <button onClick={()=> (incrementByten())}>Add10</button>
            <button onClick={()=> (increment())}>Add</button>
            <button onClick={()=> (decrement())}>Remove</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    count: state.count.value,
    });
    
const mapDispatchToProps = {
    increment,
    decrement,
    incrementByten
    };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```


### Reducers (Parents)

So when someone take a toy from the room then the box represting the count should be changed 
that is exactly what the reducer does

acccording to the action, the box would be changed to represent a new count

source: ./src/features/counter/counterReducer.js
```
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
```

### Sum up

The user make a request  ----> some one ask for a toy 
which will dispatch an action.  ----->  Tells parents which rule to follow 
Aaccording to the action, the reducer will update the state ----> change the box according to the rule 






