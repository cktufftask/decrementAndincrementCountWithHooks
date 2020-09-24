import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import './App.css';

function App() {
  const count =useSelector((state)=>state.count);
  const dispatch= useDispatch();
  const decrement=()=>{
    if(count<=0 ){
      alert('counter cannot go beyond zero');
      dispatch({type:'DEC', count: 0});
    }else{

      dispatch({type:'DEC', count: count - 1});
    }
  }

  const increment =()=>{
    let copyCount=count;
    dispatch({type:'INC', count: copyCount + 1});
  }
  return (
    <div className="App">
      {count}
      <button onClick={increment}>+</button> 
      <button onClick={decrement}>-</button> 
     </div>
  );
}

export default App;
