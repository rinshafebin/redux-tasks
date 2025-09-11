import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset, fetchRandomNumber } from './slices/counterSlice'


const App = () => {
  const count = useSelector((state)=>state.count.count)
  const dispatch =useDispatch()


  return (
    <div>
      <h1>count{count}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(reset())}>reset</button>
      <button onClick={()=>dispatch(fetchRandomNumber())}>fetchRandomNumber</button>
    </div>
  )
}

export default App