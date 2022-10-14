import React from "react";

import Par from "./Par";
import "./heroOne.css";

const HeroOne = () => {
  return (
    <>
      <div className="hero-bg ">
        <div className=" particles-sect ">
        <Par/>
        </div>
    
        
        <div className="container ">
          <div className="row hero-top">
            <div className="col-md-6 col-lg-6 col-xs-12 pt-lg-5 mt-lg-4">
              <h1 className="hero-h fw-bold">
                Decentralized Spot and <br /> Futures Trading on BSC
              </h1>
              
              <p className="hero-p">
                Automated market maker powered, taking De-Fi game to the next
                level. Make instant spot exchange, leveraged trades, provide
                liquidity to earn returns and rewards.
              </p>
              <button className="hero-btn  btn-warning btn-lg ">
                Spot Trading Platform Launched 🚀
              </button>
              <hr className="hero-hr" />
              <div>
                <button className=" hero-btn-two  me-3 ">Earn PSWAP</button>
                <button className=" hero-btn-two  me-3">Trade on PCS</button>
                <button className=" hero-btn-two  ">Governance</button>
              </div>
            </div>
            <div className="col-lg-6 d-none d-md-block">
              <img
                className="hero-img img-fluid"
                src="https://porkswap.finance/assets/images/porkswap-pink.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroOne;
