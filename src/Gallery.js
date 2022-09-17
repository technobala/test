import Tasks from './Tasks';
import React, {useState, useRef} from 'react';
import './Style.css';

function Gallery() {
  const [name, setName] = useState();
  const ref = useRef('');

  const showvalue = (event) => {
    setName (event.target.value);
  }

  const showClickValue = () => {
    setName (ref.current.value);
  }

  const [count, setCount] = useState(0);

  const useIncrementCounter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count => count + 1)
    }

    return [count, increment];
  }

  const increment = () => {
    setCount (count => count + 1);
  }

  const decrement = () => {
    setCount(count => count - 1);
  }

  


  return (
    <div className="App">
      <h3>OnChange Dispaly The Enterted value</h3>
      <input type="text" onChange={showvalue}/>
      <div>{name}</div>
      <div>
        <h3>OnClick Dispaly the Enterted value</h3>
        <input type="text" ref={ref}/>
        <button type="submit" onClick={showClickValue}>Click to get the value</button>
        <div>{name}</div>
      </div>
      <div>
        <h3>Custom Hook (Increment counter)</h3>
        <div>
        <button type="submit" onClick={increment} className="button">+</button>
        {count}
        <button type="submit" onClick={decrement} className="button">-</button>
        </div>
      </div>

    </div>
  );
}

export default Gallery;