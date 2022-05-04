import { useState } from 'react';

export const Count = () => {
  const [count, setCount] = useState(0);
  const sumCount = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };
  const resCount = (e) => {
    e.preventDefault();
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <form>
        <button className="btn btn-primary mr-4" onClick={sumCount}>
          +1
        </button>
        <button className="btn btn-danger" onClick={resCount}>
          -1
        </button>
      </form>
    </div>
  );
};
