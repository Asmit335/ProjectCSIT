import React, { useState } from "react";

const User = () => {
  const [users, setUsers] = useState([
    {
      Name: "Asmit",
      Email: "ak@gmail.com",
      Age: 20,
    },
  ]);
  return (
    <>
      <div className=" ">
        <div className="">
          <table className="">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
          </table>

          {users.map((i) => {
            return (
              <tr>
                <td>{i.Name}</td>
                <td>{i.Email}</td>
                <td>{i.Age}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default User;
