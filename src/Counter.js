import React, {useState} from 'react';

function Counter(){
  const [count, setCount] = useState(0);

  const counterValue = () => {
    setCount(count => count + 1);
  }

  return<div>
    <h3>Counter Part</h3>
    {count}
    <button type="button" onClick={counterValue}>Increment Counter</button>
  </div>
}
export default Counter;