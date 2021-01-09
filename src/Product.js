import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product_info"> {/* this div holds product info */}
        <p> The lean startup</p>
        <p className="product_price"></p>
        <small>$</small>
        <strong>19.99</strong>
        <div className="product_rating"> {/* this div holds product rating stars */}
          <p> 🌟</p>  
          <p> 🌟</p>  
        </div>
      </div>
      <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" alt=""/>
      <buttton>Add to Basket</buttton>
      
    </div>
  );
}
export default Product;
