import React, { useContext } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
// import { CartContext } from "../context/CartContextApi";

// import { useSelector } from "react-redux";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Product",
    href: "/product",
  },
  // {
  //   name: "Admin",
  //   href: "/admin",
  // },
  // {
  //   name: "Dashboard",
  //   href: "/dashboard",
  // },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const { getTotalCartItems } = useContext(CartContext);

  // const cartItems = useSelector((state) => state.cart);

  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            <img
              className="w-auto h-10 cursor-pointer"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqoOmPOeeNtA34x1k68mrZzIDDuEee0ehvdQ&usqp=CAU"
              alt="loading"
            />
          </span>
          <span className="font-bold">EasySite</span>
        </div>
        <div className="hidden grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  {item.name}
                  <span>{/* <ChevronDown className="ml-2 h-4 w-4" /> */}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden space-x-2 lg:flex items-center">
          <Link to="/signup">
            <button type="button" className=""></button>
          </Link>

          {localStorage.getItem("token") ? (
            <button
              type="button"
              className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={() => {
                // Clear token from localStorage on logout
                localStorage.removeItem("token");
                localStorage.removeItem("responseData");
                localStorage.removeItem("email");
                localStorage.removeItem("uid");
                localStorage.removeItem("token");
                window.location.replace("/");
              }}
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button
                type="button"
                className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Log In
              </button>
            </Link>
          )}

          <Link to="/cart" className="relative inline-flex items-center">
            {/* <FiShoppingCart className=" ml-2  h-6 w-6" /> */}

            <button
              type="button"
              className="w-full rounded-md bg-black px-3
                    py-2 text-sm font-semibold text-white shadow-sm
                    hover:bg-black/10 focus-visible:outline
                    focus-visible:outline-2 focus-visible:outline-offset-2
                    focus-visible:outline-black"
            >
              Cart
            </button>

            {/* <span className="absolute -top-3 left-7 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
              {/*9 {cartItems.length} */}
            {/* </span> */}
          </Link>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <img
                        className="w-auto h-10 cursor-pointer"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqoOmPOeeNtA34x1k68mrZzIDDuEee0ehvdQ&usqp=CAU"
                        alt="loading"
                      />
                    </span>
                    <span className="font-bold">EasySite</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                        <span>
                          {/* <ChevronRight className="ml-3 h-4 w-4" /> */}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className="mt-2 space-y-2">
                  <Link to="/signup">
                    <button type="button" className=" "></button>
                  </Link>

                  {localStorage.getItem("token") ? (
                    <button
                      type="button"
                      className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      onClick={() => {
                        // Clear token from localStorage on logout
                        localStorage.removeItem("token");
                        window.location.replace("/");
                      }}
                    >
                      Logout
                    </button>
                  ) : (
                    <Link to="/login">
                      <button
                        type="button"
                        className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        Log In
                      </button>
                    </Link>
                  )}

                  {/* <Link to="/login">
                    <button
                      type="button"
                      className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Log In
                    </button>
                  </Link> */}
                </div>
                <br />
                <Link to="/cart" className="relative inline-flex items-center">
                  {/* <FiShoppingCart className=" ml-2  h-6 w-6" /> */}

                  <button
                    type="button"
                    className="w-full rounded-md bg-black px-3
                    py-2 text-sm font-semibold text-white shadow-sm
                    hover:bg-black/10 focus-visible:outline
                    focus-visible:outline-2 focus-visible:outline-offset-2
                    focus-visible:outline-black"
                  >
                    Cart
                  </button>
                  {/* <span className="absolute -top-3 left-7 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                    {/* 9{cartItems.length} */}
                  {/* </span> */}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
