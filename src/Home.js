import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container"></div>
      <img
        className="home__image" /* banner image */
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      <div className="home_row">
        {/* 1st row */}
        <Product/>
        {/* First two Products */}
      </div>
      <div className="home_row">
        {/* 2nd row */}
        {/*Products */}
      </div>
      <div className="home_row">
        {/* 3rd row */}
        {/*Products */}
      </div>
    </div>
  );
}

export default Home;
