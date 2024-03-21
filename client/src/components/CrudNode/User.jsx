import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/getCrudata");

      if (response.ok) {
        const data = await response.json(); // Extract JSON data from response
        setUsers(data); // Update state with fetched data
      } else {
        console.log("Failed to fetch Data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const removeCrudData = (email, name) => {
    console.log("delete button");
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      fetch(`http://localhost:3000/removecrud/${email}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Deleted crud data");
          fetchData();
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Failed to remove.");
        });
    } else {
      console.log("Deletion cancelled.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
              <tbody className="text-center">
                {users.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td className="border border-gray-700 px-4 py-2 capitalize">
                        {user.name}
                      </td>
                      <td className="border border-gray-700 px-4 py-2">
                        {user.email}
                      </td>
                      <td className="border border-gray-700 px-4 py-2">
                        {user.age}
                      </td>
                      <td className="border border-gray-500 px-4 py-2 flex justify-center items-center space-x-4">
                        <Link
                          to={`/update/${user._id}`}
                          className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                        >
                          Update
                        </Link>
                        <button
                          className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                          onClick={() => removeCrudData(user.email, user.name)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
