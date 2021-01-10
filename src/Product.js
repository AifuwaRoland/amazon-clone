import React from "react";
import "./Product.css";

function Product({ id,title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product_info">
        {" "}
        {/* this div holds product info */}
        <p> {title} </p>
        <p className="product_price"></p>
        <small>$</small>
        <strong>{price}</strong>
        <div className="product_rating">
          {/* this div holds product rating stars */}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p> 🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button>Add to Basket</button>
    </div>
  );
}
export default Product;
