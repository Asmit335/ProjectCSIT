import React from "react";

const Test = () => {
  return (
    <>
      <form action="/upload" method="POST" encType="multipart/form-data">
        <input type="file" name="file" />
        <button type="submit">Uploadd</button>
      </form>
    </>
  );
};

export default Test;
