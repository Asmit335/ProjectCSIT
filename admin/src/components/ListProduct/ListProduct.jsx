import React from "react";
import upload_area from "../../Assets/upload_area.svg";

const ListProduct = () => {
  return (
    <>
      <div className="product-list mx-auto w-full max-w-3xl px-6 py-8 bg-white rounded-md shadow-md">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-gray-900 text-base font-semibold mb-2"
          >
            Product Title
          </label>
          <p className="text-gray-700 font-sans text-base">
            Sample Product Title
          </p>
        </div>

        <div className="mb-6">
          <label
            htmlFor="price"
            className="block text-gray-900 text-base font-semibold mb-2"
          >
            Price
          </label>
          <p className="text-gray-700 font-sans text-base">100</p>
        </div>

        <div className="mb-6">
          <label
            htmlFor="category"
            className="block text-gray-900 text-base font-semibold mb-2"
          >
            Product Category
          </label>
          <p className="text-gray-700 font-sans text-base">Electronics</p>
        </div>

        <div className="mb-6">
          <label
            htmlFor="image"
            className="block text-gray-900 text-base font-semibold mb-2"
          >
            Product Image
          </label>
          <img
            src={upload_area}
            alt="Product Image"
            className="w-full h-40 rounded-md border-2 border-gray-300 object-contain"
          />
        </div>

        <button className="w-full h-12 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300">
          Edit
        </button>
      </div>
    </>
  );
};

export default ListProduct;
