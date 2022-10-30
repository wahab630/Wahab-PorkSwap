import React from "react";
import "./utilites.css";

const Utilites = () => {
  return (
    <>
      <div className="container pb-5">
        <div className="row py-5">
          <div className="col-lg-12">
            <h1 className="text-center  fw-bold my-5">
              $PSWAP <span className="video-head"> Utilities</span>
            </h1>
          </div>
          
        </div>
        <div className="row d-flex ">
            <div className="col-lg-4 ">
              <div class=" utility-card  p-4">
                <div class="">
                  <div>
                    <img
                      className="utilites-card-img"
                      src="https://porkswap.finance/assets/images/u1.png"
                      alt=""
                    />
                  </div>

                  <h5 className="fw-bold">Governance</h5>
                  <p>
                    Vote to modify underlying protocol, change in pricing
                    oracle, futures funding rate, platform fees, list/de-list
                    tokens, new features
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="utility-card p-4">
                <div class="">
                  <div>
                    <img
                      className="utilites-card-img"
                      src="https://porkswap.finance/assets/images/u2.png"
                      alt=""
                    />
                  </div>

                  <h5 className="fw-bold">Incentives</h5>
                  <p>
                    Liquidity providers will be incentivized in $PSWAP for their
                    participation in spot and leverage liquidity pools, and LP
                    tokens can be staked for ARR of around 125%.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class=" utility-card p-4">
                <div class="">
                  <div>
                    <img
                      className="utilites-card-img"
                      src="https://porkswap.finance/assets/images/u3.png"
                      alt=""
                    />
                  </div>

                  <h5 className="fw-bold">Deflation</h5>
                  <p>
                    With a fixed supply of 1 million tokens, and only 200,000 in
                    circulation, $PSWAP token will increase in value overtime
                    since it'll be scarce and the team will buy back and burn
                    tokens from platform revenue generated through spot and
                    futures trading.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Utilites;
