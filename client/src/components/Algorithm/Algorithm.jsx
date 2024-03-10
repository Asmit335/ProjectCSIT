import React, { useState, useEffect } from "react";

const Algorithm = ({ userPurchases, products }) => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    const calculateRecommendations = () => {
      // Step 1: Iterate through the user's purchases to find the tags of the products they have bought
      const userTags = {};
      userPurchases.forEach((purchase) => {
        const productTags =
          products.find((product) => product.id === purchase.productId)?.tags ||
          [];
        productTags.forEach((tag) => {
          userTags[tag] = userTags[tag]
            ? userTags[tag] + 1 / productTags.length
            : 1 / productTags.length;
        });
      });

      // Step 2: Provide points to all the tags
      const tags = {};
      products.forEach((product) => {
        product.tags.forEach((tag) => {
          if (!tags[tag]) {
            tags[tag] = userTags[tag] ? userTags[tag] : 0;
          }
        });
      });

      // Step 3: Iterate through each product's tags and calculate the total point of the product
      const productPoints = products.map((product) => {
        let productPoint = 0;
        product.tags.forEach((tag) => {
          productPoint += tags[tag] ? tags[tag] : 0;
        });
        return { productId: product.id, productPoint };
      });

      // Step 4: Calculate the maximum of all product points
      const maximumProductPoint = Math.max(
        ...productPoints.map((product) => product.productPoint)
      );

      // Step 5: Sort the products in descending order based on the product point
      productPoints.sort((a, b) => b.productPoint - a.productPoint);

      // Step 6: Calculate the threshold for the recommended product
      const threshold = 0.5; // 50%
      const recommendedProducts = productPoints.filter((product) => {
        return product.productPoint / maximumProductPoint >= threshold;
      });

      // Update recommended products
      setRecommendedProducts(recommendedProducts);
    };

    // Call the function to calculate recommendations
    calculateRecommendations();
  }, [userPurchases, products]);

  return (
    <div>
      <h2>Recommended Products</h2>
      <ul>
        {recommendedProducts.map((product) => (
          <li key={product.productId}>
            Product ID: {product.productId}, Points: {product.productPoint}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Algorithm;
