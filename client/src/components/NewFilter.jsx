import React, { useState } from "react";

const NewFilter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className="text-center font-bold justify-center items-center">
        <h1 className="text-center font-bold justify-center items-center">
          Item:{count}
        </h1>
        <button
          className="text-center font-bold justify-center items-center"
          onClick={handleClick}
        >
          Click
        </button>
      </div>
    </>
  );
};

export default NewFilter;
