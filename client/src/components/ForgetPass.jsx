import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import { toast } from "react-toastify";
function ForgetPass() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showColorRing, setShowColorRing] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowColorRing(true);

    try {
      const response = await fetch("http://localhost:3000/forgetpass", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Parse response text
      const responseDataText = await response.text();

      // Attempt to parse response as JSON
      let responseData;
      try {
        responseData = JSON.parse(responseDataText);
        console.log(" response data:", responseData);

        if (responseData.message === "User not found") {
          throw new Error("User not found");
        }
      } catch (error) {
        console.error("Error parsing JSON response:", error);
        console.log(" response data:", responseData);
        // Handle non-JSON response
        setMessage(responseDataText);
        console.log("rrr", responseDataText);
        return;
      }

      setMessage(responseData.message);
      setEmail("");
      if (responseData.data && responseData.data.status) {
        navigate("/login");
        // Reset email input field after successful submission
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Please enter registered Email.");
    } finally {
      setTimeout(() => {
        setShowColorRing(false);
      });
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to="/">
            <img
              className="mx-auto h-20 w-auto"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqoOmPOeeNtA34x1k68mrZzIDDuEee0ehvdQ&usqp=CAU"
              alt="Your Company"
            />
          </Link>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Forgot Password
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
        >
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200"
            >
              Send Verification Email
            </button>
          </div>
        </form>

        {showColorRing && (
          <div className="flex justify-center mt-4">
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
        )}
        {message && (
          <p className="mt-4 font-bold text-sm text-center text-green-800">
            {message}
            <p>Please check your email to reset your password.</p>
          </p>
        )}
      </div>
    </>
  );
}

export default ForgetPass;
