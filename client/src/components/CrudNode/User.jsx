import React, { useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([
    {
      Name: "Asmit",
      Email: "ak@gmail.com",
      Age: 20,
    },
    {
      Name: "Ashish",
      Email: "ashish@gmail.com",
      Age: 25,
    },
  ]);

  return (
    <>
      <div className="bg-gray-50">
        <div className="container bg-gray-50 mx-auto px-4">
          <div className="py-8">
            <Link
              to="/create"
              className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Add +
            </Link>
            <table className="mt-4 w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="bg-gray-200 border border-gray-700 px-4 py-2">
                    Name
                  </th>
                  <th className="bg-gray-200 border border-gray-700 px-4 py-2">
                    Email
                  </th>
                  <th className="bg-gray-200 border border-gray-700 px-4 py-2">
                    Age
                  </th>
                  <th className="bg-gray-200 border border-gray-700 px-4 py-2">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td className="border border-gray-700 px-4 py-2">
                      {user.Name}
                    </td>
                    <td className="border border-gray-700 px-4 py-2">
                      {user.Email}
                    </td>
                    <td className="border border-gray-700 px-4 py-2">
                      {user.Age}
                    </td>
                    <td className="border border-gray-500 px-4 py-2 flex justify-center items-center space-x-4">
                      <Link
                        to="/update"
                        className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                      >
                        Update
                      </Link>
                      <button className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
