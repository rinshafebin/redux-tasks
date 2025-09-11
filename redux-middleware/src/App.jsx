import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  const name = useSelector(state => state.user.name)

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>0</button>

      <h1>{name}</h1>
      <button onClick={()=>dispatch({type:"setName",payload:"rinsha"})}>name</button>

    </div>
  );
};

export default App;
