import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const CategoryProducts = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("Fetching products for category:", name);
    const fetchProducts = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${name}`
      );
      console.log("Response received:", response);
      const data = await response.json();
      console.log("CategoryProducts received:", data);
      setProducts(data);
    };
    fetchProducts();
  }, [name]); // Include name in dependency array to re-fetch products when the category name changes

  if (products.length === 0) return <div>Loading.....</div>;

  return <ProductCard products={products} />;
};

export default CategoryProducts;
