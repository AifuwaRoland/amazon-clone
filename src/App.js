import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51I8kMrEyutNcTOo4lMdAhTxovOoPAdvP5is3Bqi2f7JpFvUviEX12wDX2M2KppRx7py0TXvKDd06AUwF5XPNMvQu006Rnnf62R"
);
function App() {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once the app component loads.
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>", authUser);
      if (authUser) {
        //the user just logged in
        dispatch({
          type: "SET_USER", //shoot user data into data layer
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER", // set user to null in data layer once user log out
          user: null,
        });
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
