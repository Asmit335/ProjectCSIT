import React from "react";
import { DollarSign, Landmark, Filter, Truck, Percent } from "lucide-react";

const Services = () => {
  return (
    <>
      <div className="w-full">
        <div className="mx-auto my-12 max-w-7xl px-4 sm:px-6 md:my-24 lg:my-32 lg:px-8">
          <p className="text-3xl font-bold md:text-4xl  justify-center items-center flex mb-5">
            Our Services
          </p>
          <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                <Landmark className="h-9 w-9 text-gray-700" />
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Secured Payments
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                "Ensure peace of mind with our secured payment options on our
                ecommerce platform. We prioritize the safety of your financial
                transactions, implementing robust security measures to protect
                your sensitive information.
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                <Truck className="h-9 w-9 text-gray-700" />
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Fast & Free Delivery
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Experience the convenience of fast and free delivery with our
                ecommerce platform. We prioritize your time and satisfaction by
                offering swift shipping services at no additional cost.
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                <DollarSign className="h-9 w-9 text-gray-700" />
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Money-back Gauranteed
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Shop risk-free with our money-back guarantee on every purchase.
                We stand by the quality of our products, and if you're not
                completely satisfied, we offer a hassle-free refund.
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                <Percent className="h-9 w-9 text-gray-700" />
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Exciting Offers
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                "Discover a world of savings with our exciting offers on a wide
                range of products. From exclusive discounts to limited-time
                promotions, our ecommerce platform brings you unbeatable deals
                that add value to your shopping experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
