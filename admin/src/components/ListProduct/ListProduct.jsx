import React, { useEffect, useState } from "react";
// import cross_icon from "../../Assets/cross_icon.png";
const ListProduct = () => {
  const [allProduct, setAllProduct] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch("http://localhost:3000/upload-image");
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

  return (
    <>
      <div className="list-prouduct">
        <h1 className="font-bold text-xl">All Products List</h1>
        <div className="listproduct-format">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Category</p>
          <p>Remove</p>
          <img src={cross_icon} className="listproduct-remove" alt="loading" />
        </div>

        <div className="allproductList">
          <hr className="border border-black" />
          {allProduct.map((product, index) => {
            return (
              <div key={index} className="listproduct-format-main">
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
                <p>{product.price}</p>
                <p>{product.category}</p>
                <img
                  src={cross_icon}
                  className="listproduct-remove"
                  alt="loading"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ListProduct;
