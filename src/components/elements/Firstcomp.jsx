import React from "react";
import "./firstcomp.css";

const Firstcomp = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
        <div className="row">
          <div className="col-lg-12 ">
            <h3 className="text-center my-5 fw-bold ">As seen on</h3>
          </div>
          <div className="col-lg-12 d-flex mb-5">
            <div className="col-lg-3">
              <img
                className="first-comp-img mt-2"
                src="https://porkswap.finance/assets/images/featured/02246f50-3412-11eb-bfdd-de89f8b3b8b8.png"
                alt=""
              />
            </div>
            <div className="col-lg-3">
              <img
                className="first-comp-img  mt-2"
                src="https://porkswap.finance/assets/images/featured/logo-bloomberg.svg"
                alt=""
              />
            </div>
            <div className="col-lg-3">
              <img
                className="first-comp-img  mt-2 "
                src="https://porkswap.finance/assets/images/featured/logo-benzinga.webp"
                alt=""
              />
            </div>
            <div className="col-lg-3">
              <img
                className="first-comp-img  mt-2"
                src=" https://porkswap.finance/assets/images/featured/news-btc.png"
                alt=""
              />
            </div>
          </div>
        </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Firstcomp;
