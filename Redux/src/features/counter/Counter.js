import React from 'react'
import { connect } from 'react-redux';
import { increment, decrement, incrementByten} from './counterActions'

const Counter = ({count, increment, decrement, incrementByten}) => {
    // const count = useSelector((state) => state.value)
    // const dispatch = useDispatch()
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