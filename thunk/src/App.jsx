import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset } from './slices/counterSlice'


const App = () => {
  const count = useSelector(state.counter.count)
  const dispatch =useDispatch()


  return (
    <div>
      <h1>count{count}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(reset())}>reset</button>



    </div>
  )
}

export default App