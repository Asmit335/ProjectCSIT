import React, { useState } from "react";
import upload_area from "../../Assets/upload_area.svg";
const AddProduct = () => {
  const [image, setImage] = useState(false);

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <>
      <div className="add-product mx-auto w-full max-w-3xl px-6 py-8 bg-white rounded-md shadow-md">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-gray-900 text-base font-semibold mb-2"
          >
            Product Title
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Type here"
            className="w-full h-12 rounded-md pl-4 border-2 border-gray-300 outline-none text-gray-700 font-sans text-base focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="price"
            className="block text-gray-900 text-base font-semibold mb-2"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Input Price"
            className="w-full h-12 rounded-md pl-4 border-2 border-gray-300 outline-none text-gray-700 font-sans text-base focus:border-blue-500 overflow-hidden"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="category"
            className="block text-gray-900 text-base font-semibold mb-2"
          >
            Product Category
          </label>
          <select
            id="category"
            name="category"
            className="w-full h-12 rounded-md pl-4 border-2 border-gray-300 outline-none text-gray-700 font-sans text-base focus:border-blue-500"
          >
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
          </select>
        </div>

        <div className="mb-6">
          <label
            htmlFor="file-input"
            className="block text-gray-900 text-base font-semibold mb-2"
          >
            Product Image
          </label>
          <label htmlFor="file-input" className="block cursor-pointer">
            <img
              src={image ? URL.createObjectURL(image) : upload_area}
              alt="loading"
              className="w-full h-40 rounded-md border-2 border-gray-300 object-contain"
            />
          </label>
          <input
            type="file"
            id="file-input"
            name="image"
            onChange={imageHandler}
            className="hidden"
          />
        </div>

        <button className="w-full h-12 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300">
          Add
        </button>
      </div>
    </>
  );
};

export default AddProduct;
