import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Product = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading</>;
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  return (
    <>
      <Navbar />
      <h2 className="text-4xl font-bold text-center mt-24">Latest Products</h2>

      <section className="text-gray-600 body-font">
        <div className="  container px-5 py-24 mx-auto">
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 m-2 p-4 gap-5 justify-center items-center ">
            <div className=" mb-24 flex flex-wrap justify-center gap-10">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={() => setFilter(data)}
              >
                All
              </button>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={() => filterProduct("electronics")}
              >
                Electronics
              </button>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={() => filterProduct("men's clothing")}
              >
                Men's Clothing
              </button>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={() => filterProduct("women's clothing")}
              >
                Women's Clothing
              </button>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={() => filterProduct("jewelery")}
              >
                Jewelery
              </button>
            </div>
          </div>

          <div className="flex flex-wrap -m-4">
            {filter.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50"
              >
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt={product.title}
                    className="object-contain w-full h-full block transition duration-300 ease-in-out transform hover:scale-105 group-hover:opacity-75 cursor-pointer"
                    src={product.image}
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 uppercase text-xs tracking-widest title-font mb-1">
                    {product.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {product.title.substring(0, 15)}
                  </h2>
                  <p className="mt-1 font-bold text-black">${product.price}</p>
                  <button className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                    Buy Now
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Product;
