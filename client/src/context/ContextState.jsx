import React, { useState } from "react";
import Context1 from "./ContextApi";

const ContextState = (props) => {
  const [userEmail1, setUserEmail1] = useState("");

  const [total1, setTotal1] = useState();

  return (
    <>
      <Context1.Provider
        value={{ userEmail1, setUserEmail1, total1, setTotal1 }}
      >
        {props.children}
      </Context1.Provider>
    </>
  );
};

export default ContextState;
