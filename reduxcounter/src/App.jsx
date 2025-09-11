import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { increment,decrement,reset } from './reducers/counterSlice'


const App = () => {
  const count = useSelector((state)=>state.counter.count)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(reset())}>reset</button>
    </div>
  )
}

export default App