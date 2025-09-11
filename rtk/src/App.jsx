import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './reducers/counterSlice';

const App = () => {
  const dispatch = useDispatch();
  
  const count = useSelector((state) => state.counter.count);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default App;
