import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa";

import "../componentsstyles/productDetails.css";


const ProductDetail = () => {
  const { productId } = useParams();
 console.log(productId)
  const { isloading, userData, iserror } = useSelector((state) => ({
    isloading: state.productData.loading,
    userData: state.productData.userData,
    iserror: state.productData.error,
  }));
console.log(userData)
  if (isloading) {
    return <div>Loading...</div>;
  }

  if (iserror) {
    return <div>Error: {iserror}</div>;
  }

  const product = userData.find((item) => item.id === parseInt(productId));
  console.log(product)

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-card">
        <h3>{product.title}</h3>
      
        <span className="offer-price">Offer Price: {product.price}</span>
        <div className="quantity-controls">
          <div>
            <FaMinus />
          </div>
          <input type="text" value="1" />
          <div>
            <FaPlus />
          </div>
          <button>Add To Cart</button>
        </div>
        <div>
   <h2>Rating:     {product.rating.rate}</h2>
        </div>
      
        <h6>Description: </h6>
        <p>This is an amazing product</p>
      </div>
    </div>
  );
};

export default ProductDetail;
