import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function FeaturedProduct() {
  const [products, setProducts] = useState([]);
  const [fakeStoreProducts, setFakeStoreProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((data) => setFakeStoreProducts(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/featured")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleBuy = async (product) => {
    console.log("buy clicked", product);
    const payload = {
      return_url: "http://localhost:5173/success",
      website_url: "http://localhost:5173/",
      amount: product.price * 100,
      purchase_order_id: product.id,
      purchase_order_name: product.title,
      customer_info: {
        name: "Khalti Bahadur",
        email: "example@gmail.com",
        phone: "9800000123",
      },
    };
    const response = await axios.post("http://localhost:3000/khalti", payload);
    // Redirect the user to the website_url

    console.log("khalti response:", response);
    console.log("payment url:", `${response?.data?.data?.payment_url}`);
    if (response) {
      window.location.href = `${response?.data?.data?.payment_url}`;
    }
  };

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-bold text-center mt-24">Our Products</h1>

          <section className="text-gray-600 body-font m-10">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                {fakeStoreProducts.map((product) => (
                  <div
                    key={product.id}
                    className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50"
                  >
                    <Link
                      to={`/products/${product.id}`}
                      className="block relative h-48 rounded overflow-hidden"
                    >
                      <a>
                        <img
                          alt="ecommerce"
                          className="object-contain w-full h-full block transition duration-300 ease-in-out transform hover:scale-105 group-hover:opacity-75 cursor-pointer"
                          src={product.image}
                        />
                      </a>
                    </Link>
                    <div className="mt-4 text-center">
                      <h3 className="text-gray-500 uppercase text-xs tracking-widest title-font mb-1">
                        {product.category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {product.title.substring(0, 15)}
                      </h2>
                      <p className="mt-1 font-bold text-black">
                        ${product.price}
                      </p>
                      <button
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        onClick={() => handleBuy(product)}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                ))}
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50"
                  >
                    <Link
                      // to={`/products/${product.title}`}
                      className="block relative h-48 rounded overflow-hidden"
                    >
                      <a>
                        <img
                          alt="ecommerce"
                          className="object-contain w-full h-full block transition duration-300 ease-in-out transform hover:scale-105 group-hover:opacity-75 cursor-pointer"
                          src={`http://localhost:3000/${product.image}`}
                        />
                      </a>
                    </Link>
                    <div className="mt-4 text-center">
                      <h3 className="text-gray-500 uppercase text-xs tracking-widest title-font mb-1">
                        {product.category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {product.title.substring(0, 15)}
                      </h2>
                      <p className="mt-1 font-bold text-black">
                        ${product.price}
                      </p>
                      <button
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        onClick={() => handleBuy(product)}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
