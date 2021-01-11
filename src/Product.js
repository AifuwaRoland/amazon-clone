import React from "react";
import "./Product.css";
import {useStateValue} from "./StateProvider";

function Product({ id,title, image, price, rating }) {
  // eslint-disable-next-line 
  const [{basket}, dispatch]= useStateValue();
  
  const addToBasket =() =>{
    //dispatch the items into data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      },
    });
  };
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

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}
export default Product;
