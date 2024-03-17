import React, { useEffect, useState } from "react";
import cross_icon from "../../Assets/cross_icon.png";
const ListProduct = () => {
  const [allProduct, setAllProduct] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch("http://localhost:3000/getproduct");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid response format");
      }
      console.log(response);

      const data = await response.json();
      setAllProduct(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (productitle) => {
    try {
      await fetch("http://localhost:3000/removeproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: productitle }), // This is where { id: productId } is used
      });
      await fetchInfo();
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <h1 className="font-bold text-xl mb-4">All Products List</h1>
      </div>
      <div className="list-prouduct flex flex-col overflow-x-auto">
        <div className="overflow-y-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-900">
              <tr className="">
                <th
                  scope="col"
                  className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-200 uppercase tracking-wider"
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-200 uppercase tracking-wider"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-200 uppercase tracking-wider"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-4 md:px-26 py-3 text-left text-xs md:text-sm font-medium text-gray-200 uppercase tracking-wider"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-200 uppercase tracking-wider"
                >
                  Remove
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {allProduct.map((product, index) => (
                <tr key={index}>
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                    <img
                      src={`http://localhost:3000/${product.image}`}
                      alt={product.title}
                      className="h-16 w-16 md:h-20 md:w-20 object-cover"
                    />
                  </td>
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                    {product.title}
                  </td>
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                    {product.price}
                  </td>
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                    {product.category}
                  </td>
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                    <img
                      onClick={() => {
                        removeProduct(product.title);
                      }}
                      src={cross_icon}
                      className="h-6 w-6 md:h-8 md:w-8 cursor-pointer"
                      alt="Remove"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListProduct;
