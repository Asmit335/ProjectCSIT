import React, { useState } from "react";
import { Link } from "react-router-dom";
import checkout1 from "../../../../server/models/Checkout";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function Checkout() {
  const [formData, setFormData] = useState({
    fullname: "",
    paymentType: "Cash on Delivery",
    address: "",
    phone: "",
    city: "",
    province: "",
    postalCode: "",
    priceTopay: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("FormData:", formData); // Log the formData object to inspect its values

    // Check if required fields are filled out
    if (
      !formData.fullname ||
      !formData.address ||
      !formData.phone ||
      !formData.city ||
      !formData.province ||
      !formData.postalCode ||
      !formData.priceTopay
    ) {
      toast.error("Please fill out all the fields");
      return;
    } else {
      toast.success("Order Successfull.");
      navigate("/product");
    }

    try {
      // Send the order data to the server
      const result = await fetch("http://localhost:3000/orderdata", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const orderResult = await result.json();
      localStorage.setItem("orderData", JSON.stringify(orderResult));

      // Create a new document with the form data
      const newCheckout = new checkout1(formData);

      // Save the document to the database
      await newCheckout.save();

      // Reset the form data after successful submission
      setFormData({
        fullname: "",
        paymentType: "",
        phone: "",
        address: "",
        city: "",
        province: "",
        postalCode: "",
        priceTopay: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mx-auto w-full max-w-7xl bg-slate-100 py-2 ">
          <div className="mx-auto my-4 mr-24 max-w-2xl md:my-6">
            <div className="mx-auto my-4 max-w-4xl md:my-6  ">
              <h1 className="font-bold text-xl mr-4">Order Summary </h1>
              <div className="overflow-hidden  rounded-xl shadow">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Contact Info */}

                  <div className="px-5 py-6 text-gray-900 md:px-8">
                    <div className="flow-root">
                      <div className="-my-6 divide-y divide-gray-200">
                        <div className="py-6">
                          <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                            <div>
                              <h3
                                id="contact-info-heading"
                                className="text-lg font-semibold text-gray-900"
                              >
                                Contact information
                              </h3>

                              <div className="mt-4 w-full">
                                <div className="mb-[-5rem]">
                                  <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="name"
                                  >
                                    Full Name
                                  </label>
                                  <input
                                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2  text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="text"
                                    placeholder="Enter your name"
                                    id="name"
                                    name="fullname"
                                    value={formData.fullname}
                                    onChange={(e) =>
                                      setFormData({
                                        ...formData,
                                        fullname: e.target.value,
                                      })
                                    }
                                  ></input>
                                </div>
                              </div>
                            </div>
                            <hr className="my-8" />

                            <hr className="my-8" />
                            <div className="mt-5">
                              <h3 className="text-lg font-semibold text-gray-900">
                                Shipping address
                              </h3>

                              <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="address"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Address
                                  </label>
                                  <div className="mt-1">
                                    <input
                                      type="text"
                                      id="address"
                                      name="address"
                                      value={formData.address}
                                      onChange={(e) =>
                                        setFormData({
                                          ...formData,
                                          address: e.target.value,
                                        })
                                      }
                                      autoComplete="street-address"
                                      className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                  </div>
                                </div>
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="number"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Phone Number
                                  </label>
                                  <div className="mt-1">
                                    <input
                                      type="tel"
                                      id="number"
                                      name="phone"
                                      value={formData.phone}
                                      onChange={(e) =>
                                        setFormData({
                                          ...formData,
                                          phone: e.target.value,
                                        })
                                      }
                                      autoComplete="tel"
                                      pattern="[0-9]{10}"
                                      maxLength="10"
                                      min="0"
                                      title="Please enter a 10-digit phone number"
                                      className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1"
                                      required
                                    />
                                  </div>
                                </div>

                                <div>
                                  <label
                                    htmlFor="city"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    City
                                  </label>
                                  <div className="mt-1">
                                    <input
                                      type="text"
                                      id="city"
                                      name="city"
                                      value={formData.city}
                                      onChange={(e) =>
                                        setFormData({
                                          ...formData,
                                          city: e.target.value,
                                        })
                                      }
                                      autoComplete="address-level2"
                                      className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                  </div>
                                </div>

                                <div>
                                  <label
                                    htmlFor="region"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Province
                                  </label>
                                  <div className="mt-1">
                                    <input
                                      type="text"
                                      id="region"
                                      name="province"
                                      value={formData.province}
                                      onChange={(e) =>
                                        setFormData({
                                          ...formData,
                                          province: e.target.value,
                                        })
                                      }
                                      autoComplete="address-level1"
                                      className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                  </div>
                                </div>

                                <div>
                                  <label
                                    htmlFor="postal-code"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Postal code
                                  </label>
                                  <div className="mt-1">
                                    <input
                                      type="text"
                                      id="postal-code"
                                      name="postalCode"
                                      value={formData.postalCode}
                                      onChange={(e) =>
                                        setFormData({
                                          ...formData,
                                          postalCode: e.target.value,
                                        })
                                      }
                                      autoComplete="postal-code"
                                      className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-1 flex flex-row items-center">
                              <div className="mr-6">
                                <label
                                  htmlFor="postal-code"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Price to Pay
                                </label>
                                <div className="mt-1">
                                  <input
                                    type="text"
                                    id="priceTopay"
                                    name="priceTopay"
                                    value={formData.priceTopay}
                                    onChange={(e) =>
                                      setFormData({
                                        ...formData,
                                        priceTopay: e.target.value,
                                      })
                                    }
                                    autoComplete="priceTopay"
                                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                  />
                                </div>
                              </div>

                              <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4">
                                <div className="col-span-3 sm:col-span-4">
                                  <div className="mb-7">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                      Payment Type
                                    </h3>

                                    <select
                                      name="paymentType"
                                      id="paymentType"
                                      value={formData.paymentType}
                                      onChange={(e) =>
                                        setFormData({
                                          ...formData,
                                          paymentType: e.target.value,
                                        })
                                      }
                                    >
                                      <option value="Cash on Delivery">
                                        Cash on Delivery
                                      </option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <hr className="my-8" />

                            <div className="flex gap-6 justify-end border-t border-gray-200  ">
                              <Link to="/product">
                                <button
                                  type="submit"
                                  className="rounded-md bg-black px-3 py-2  text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                  Continue Shopping
                                </button>
                              </Link>
                              <button
                                // type="submit"
                                className="rounded-md bg-black px-3 py-2  text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                onClick={() => {
                                  handleSubmit();
                                }}
                              >
                                Make Order
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
