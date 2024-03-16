import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CreateUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
  });

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/creatUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      // Check if the request was successful (status code 200-299)
      if (response.ok) {
        // Handle successful response
        const responseData = await response.json();
        console.log("User created:", responseData);

        // Reset the user state
        setUser({
          name: "",
          email: "",
          age: "",
        });
      } else {
        // Handle errors for non-successful responses
        const errorMessage = await response.text();
        console.error("Error creating user:", errorMessage);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="max-w-md w-full space-y-8 ">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-50">
              Add User
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={changeHandler}
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={changeHandler}
                  autoComplete="email"
                  required
                  className="appearance-none   relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="age" className="sr-only">
                  Age
                </label>
                <input
                  id="age"
                  name="age"
                  onChange={changeHandler}
                  type="text"
                  autoComplete="age"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Age"
                  min="1"
                  maxLength={2}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
              <Link
                to="/user"
                className="mt-3 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Go Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
