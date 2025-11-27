import React, { useState } from 'react';

const Function = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="text-center space-y-5 bg-green-300 p-5 px-20 ml-[35rem] rounded-xl shadow-lg">
      <h1 className="text-3xl hover:text-blue-500 font-bold">Counter</h1>
      <p className="text-xl font-bold">Count: {count}</p>
      <button className="text-xl font-bold bg-blue-500 px-4 py-2 rounded-lg shadow-lg" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
};

export default Function;