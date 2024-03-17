import React from "react";
import { useForm } from "react-hook-form";

const ResetPass = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Send the new password data to the server for resetting the password
      const response = await fetch("http://localhost:3000/resetpass", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send the form data
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // If password reset is successful, display a success message to the user
      alert("Password reset successfully!");
    } catch (error) {
      // If an error occurs during password reset, display an error message to the user
      console.error("Error:", error);
      alert("Failed to reset password. Please try again.");
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqoOmPOeeNtA34x1k68mrZzIDDuEee0ehvdQ&usqp=CAU"
            alt="Your Company"
          />

          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Reset Password
          </h2>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)} // Pass the handleSubmit function
          className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
        >
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            New Password
          </label>
          <div className="mt-2">
            <input
              id="password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                  message: `- at least 8 characters
                        - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
                        - Can contain special characters`,
                },
              })}
              type="password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ResetPass;
