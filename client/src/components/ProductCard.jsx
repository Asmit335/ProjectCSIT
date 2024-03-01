import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ products = [] }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => {
            console.log(product, "product");
            const { id, title, price, description, category, image } = product;
            return (
              <Link
                to={`/products/${id}`}
                className="lg:w-[23%] md:w-1/2 p-4 w-full mb-4 cursor-pointer rounded-lg shadow ml-4"
              >
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt={title}
                    className=" object-contain object-center w-full h-full block"
                    src={image}
                  />
                </a>
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                    {category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {title.substring(0, 15)}
                  </h2>
                  <p className="mt-1 text-md font-semibold">${price}</p>
                  <button
                    type="button"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Buy Now
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
