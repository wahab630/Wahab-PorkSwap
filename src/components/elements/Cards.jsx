import React from "react";
import "./cards.css";

const Cards = () => {
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row d-flex ">
         
            <div className="col-lg-4 col-sm-12">
              <div className="other-card ">
                <div className=" d-flex flex-column align-items-center">
                  <div>
                    <img
                      className="card-img"
                      src="https://porkswap.finance/assets/images/features/f1.svg"
                      alt=""
                    />
                  </div>
                  <h5 className="fw-bold text-center">Deflationary</h5>
                  <p className="text-center">
                    While other spot platform tokens mint 750,000 tokens per
                    day, we're aiming to burn 10% everyday through the revenue
                    generated from the platform. Increasing the value of token
                    over 30X within a year.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className=" shadow-card">
                <div className=" d-flex flex-column align-items-center">
                  <div>
                    <img
                      className="card-img"
                      src="https://porkswap.finance/assets/images/features/f2.svg"
                      alt=""
                    />
                  </div>
                  <h5 className="fw-bold text-center">Community Governance</h5>
                  <p className="text-center">
                    We believe in democratizing access to finance, what else can
                    be a better way to give entire power to the community.
                    Create custom polls, vote for good ones, bring new ideas to
                    the table, change the world for better.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="other-card ">
                <div className=" d-flex flex-column align-items-center ">
                  <div>
                    <img
                      className="card-img"
                      src="https://porkswap.finance/assets/images/features/f3.svg"
                      alt=""
                    />
                  </div>
                  <h5 className="fw-bold text-center">Future Trading</h5>
                  <p className="text-center">
                    Bringing forward the true meaning of De-Fi that's
                    decentralizing current financial products, bringing
                    derivatives through futures trading so you can increase your
                    returns on profit. Buy long or sell short, it's on you.
                  </p>
                </div>
              </div>
            </div>
       
          
        </div>
        <div className=" row d-flex  mt-3">
            <div className="col-lg-4 col-sm-12">
              <div className=" shadow-card">
                <div className=" d-flex flex-column align-items-center">
                  <div>
                    <img
                      className="card-img"
                      src="https://porkswap.finance/assets/images/features/f6.svg"
                      alt=""
                    />
                  </div>
                  <h5 className="fw-bold text-center">Spot Trading</h5>
                  <p className="text-center">
                    Improved automated market maker to provide instant
                    fulfillment of orders with less slippage, exchange your
                    favourite tokens with 10 times less gas than Ethereum.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className=" other-card pb-4">
                <div className=" d-flex flex-column align-items-center">
                  <div>
                    <img
                      className="card-img"
                      src="https://porkswap.finance/assets/images/features/f4.svg"
                      alt=""
                    />
                  </div>
                  <h5 className="fw-bold text-center">Lottery</h5>
                  <p className="text-center">
                    Try your luck by gambling the extra tokens that you made by
                    providing liquidity, with a chance to 100X your investment.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="shadow-card">
                <div className=" d-flex flex-column align-items-center">
                  <div>
                    <img
                      className="card-img"
                      src="https://porkswap.finance/assets/images/features/f5.svg"
                      alt=""
                    />
                  </div>
                  <h5 className="fw-bold text-center ">Security</h5>
                  <p className="text-center">
                    While other projects are getting DNS hijacked, we ensure the
                    security of our platform from DNS all the way to Smart
                    Contract are state-of-the-art secured.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Cards;
