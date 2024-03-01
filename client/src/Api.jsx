import React, { useEffect } from "react";

const Api = () => {
  const e = "https://dummyjson.com/users";

  const fetchUser = async () => {
    try {
      const res = await fetch(e);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return <div>Api</div>;
};

export default Api;
