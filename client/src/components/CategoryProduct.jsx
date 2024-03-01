import React, { useEffect, useState } from "react";
import Category from "./Category";

const CategoryProduct = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = () => {
      fetch("https://fakestoreapi.com/products/categories")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data, "data");
          console.log("Categories data:", data); // Log the categories data
          console.log("Response received:", response);

          setCategories(data);
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
        });
    };
    fetchCategories();
  }, []);

  if (categories.length === 0) return <div>Loading.....</div>;

  return <Category cards={categories} />;
};

export default CategoryProduct;
