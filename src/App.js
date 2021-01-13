import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51I8kMrEyutNcTOo4lMdAhTxovOoPAdvP5is3Bqi2f7JpFvUviEX12wDX2M2KppRx7py0TXvKDd06AUwF5XPNMvQu006Rnnf62R"
);
function App() {
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
  }, []);

  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
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
