import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          {" "}
          Checkout
          <Link to="/checkout"> {basket?.length} items</Link>
        </h1>

        {/* Payment section-delivery address */}
        <div className="payment_section">
          <div className="payment_title">
            <h3> Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>1258 Pembina Highway</p>
            <p>Winnipeg,MB</p>
          </div>
        </div>

        {/* Payment section-Review items */}
        <div className="payment_section">
          <div className="payment_title">
            <h3> Review items and Delivery </h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment section-Payment method */}
        <div className="payment_section">
          <h3>Payment Method</h3>
        </div>
        <div className="payment_details">{/* implement stripe here */}</div>
      </div>
    </div>
  );
}

export default Payment;
