import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaLock, FaLockOpen } from "react-icons/fa";

export default function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  const [confirmOpen, setConfirmOpen] = useState(false);
  const confirmtoggle = () => {
    setConfirmOpen(!confirmOpen);
  };

  const [passwordInput, setPasswordInput] = useState("");

  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

  const onSubmit = async (data) => {
    const { email, password, confirm } = data; // Extract form data
    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          confirm,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json(); // Parsing JSON response

      if (responseData.error) {
        throw new Error(responseData.error); // If server returns an error message
      }

      console.log("Server Response:", responseData); // Logging response to console
      console.log("Submitted Form Data:", data);

      // Store email in localStorage
      localStorage.setItem("email", email);

      // Store token in localStorage
      localStorage.setItem("token", responseData.token);

      // Show success toast if signup is successful
      toast.success("Registration Successful");
      // Assuming reset is a function provided by a form library like React Hook Form
      reset(); // Resetting the form
      // Redirect to login page after successful signup
      navigate("/login");
    } catch (error) {
      console.error("Error:", error); // Handle error
      // Show error toast if signup fails
      toast.error("Registration Failed. ");
    }
  };

  // password tracking
  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };
  const confirmHandlePasswordChange = (e) => {
    setConfirmPasswordInput(e.target.value);
  };
  return (
    <>
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
              Register a New account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-6"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                        message: "Email is not Valid",
                      },
                    })}
                    type="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      {/* Forgot password? */}
                    </a>
                  </div>
                </div>

                <div className="mt-2 relative">
                  <input
                    id="password"
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value:
                          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?\/\\-]).{8,}$/,
                        message: ` 8 characters,1 uppercase,1 lowercase,1 number, special characters`,
                      },
                    })}
                    type={open === false ? "password" : "text"}
                    required
                    value={passwordInput}
                    onChange={handlePasswordChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />

                  {/* //togglepassword */}
                  {passwordInput && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <div className="text-xl">
                        {open === false ? (
                          <FaLock onClick={toggle} />
                        ) : (
                          <FaLockOpen onClick={toggle} />
                        )}
                      </div>
                    </div>
                  )}

                  {errors.password && (
                    <p className="text-red-500 absolute top-full whitespace-nowrap overflow-hidden ">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="confirm"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirm Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      {/* Forgot password? */}
                    </a>
                  </div>
                </div>

                <div className="mt-2 relative">
                  <input
                    id="confirm"
                    {...register("confirm", {
                      required: "Confirm the Password",
                      pattern: {
                        value:
                          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?\/\\-]).{8,}$/,
                        message: "Password must meet the specified criteria",
                      },
                      validate: {
                        matchesPassword: (value, formValues) =>
                          value === formValues.password ||
                          "Password not Matched",
                      },
                    })}
                    type={confirmOpen === false ? "password" : "text"}
                    required
                    value={confirmPasswordInput}
                    onChange={confirmHandlePasswordChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />

                  {/* //togglepassword */}
                  {passwordInput && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <div className="text-xl">
                        {confirmOpen === false ? (
                          <FaLock onClick={confirmtoggle} />
                        ) : (
                          <FaLockOpen onClick={confirmtoggle} />
                        )}
                      </div>
                    </div>
                  )}

                  {errors.password && (
                    <p className="text-red-500 absolute top-full whitespace-nowrap overflow-hidden ">
                      {errors.confirm.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Already a member?{" "}
              <Link
                to="/login"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                {" "}
                Login
              </Link>
            </p>
          </div>
        </div>
      </>
    </>
  );
}
