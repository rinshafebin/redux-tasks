import { useDispatch, useSelector } from "react-redux"
import { decrement, increment,reset } from "./store/counterSlice";

function App() {
  const count = useSelector(state => state.c.count);
  const dispatch = useDispatch();

  return (

    <>
      <h1>counter :{count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(reset())}>reset</button>

    </>
  )
}

export default App
