import { useContext, useEffect, useState } from "react";
// import { AppContext } from "../context1/ProductContext";
import { Link } from "react-router-dom";

export default function FeaturedProduct() {
  // const { loading, error, featureProducts } = useContext(AppContext);
  // console.log(featureProducts);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // if (loading) {
  //   return <div className="text-2xl font-bold text-gray-700">Loading...</div>;
  // }

  // if (error) {
  //   return (
  //     <div className="text-2xl font-bold text-red-500">Error: {error}</div>
  //   );
  // }
  return (
    <>
      <div className="bg-white ">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          {/* <h1 className="text-2xl font-bold tracking-tight text-gray-900"> */}
          <h1 className="text-4xl font-bold text-center mt-24">Our Products</h1>

          <section className="text-gray-600 body-font m-10">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                {products.map((product) => (
                  <Link
                    to={`/products/${product.id}`}
                    key={product.id}
                    className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 "
                  >
                    <a className="block  relative h-48 rounded overflow-hidden ">
                      <img
                        alt="ecommerce"
                        // className="object-contain object-center w-full cursor-pointer h-full block"
                        className="object-contain w-full h-full block transition duration-300 ease-in-out transform  hover:scale-105 group-hover:opacity-75  cursor-pointer"
                        src={product.image}
                      />
                    </a>
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
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
