import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const categories = ["Electronics", "Men'sclothing", "Women's Clothing"];

  const [products, setProducts] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // Group products by category
        const productsByCategory = {};
        data.forEach((product) => {
          if (!productsByCategory[product.category]) {
            productsByCategory[product.category] = [];
          }
          productsByCategory[product.category].push(product);
        });
        setProducts(productsByCategory);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium capitalize title-font text-gray-900">
              Master Cleanse Reliac Heirloom Category
            </h1>
          </div>
          <div className="flex flex-wrap m-4">
            {categories.map((category, index) => (
              <div key={index} className="p-4 md:w-1/3">
                <Link to={`/categories/${category}`} className="cursor-pointer">
                  <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div className="flex items-center mb-3 cursor-pointer hover:scale-105 group-hover:opacity-75">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </div>
                      <h2 className="text-gray-900 capitalize font-bold text-lg title-font">
                        {category}
                      </h2>
                    </div>
                  </div>
                </Link>
                <div>
                  {/* Render products for the current category */}
                  {products[category]?.map((product) => (
                    <div key={product.id}>
                      <h3>{product.title}</h3>
                      <p>{product.description}</p>
                      <img src={product.image} alt={product.title} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
