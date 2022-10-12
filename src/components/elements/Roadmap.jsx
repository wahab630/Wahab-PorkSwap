import React from "react";
import "./roadmap.css";

const Roadmap = () => {
  return (
    <>
      <div className="roadbg">
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-12">
            <h1 className="text-center  fw-bold my-5">
              Product <span className="video-head"> Roadmap</span>
            </h1></div>

            <div  className="col-lg-12 text-center">
                <img className="img-fluid  roadmap-img" src="https://porkswap.finance/assets/images/porkswap-timeline.png" alt="" />
            </div>
            <div className="col-lg-12 my-5">
                <hr />
            </div>
             <div className="col-lg-8">
                <img  className="roadmap-img-two" src="https://porkswap.finance/assets/images/gov.png" alt="" />
             </div>
             <div className="col-lg-4">
                 <h2 className="fw-bold text-right">Governance Platform</h2>
                 <button className="roadmap-btn btn fw-bold">Launched, Start Voting Now</button>
                 <p className="fw-bold">You'll be able to vote for:</p>
                 <ul>
                    <li>Change in underlying protocol</li>
                    <li>Change in pricing oracle</li>
                    <li>Change in futures funding rate</li>
                    <li>Change in platform fees</li>
                    <li>Change inlist/de-list tokens</li>
                    <li>Propose new features</li>
                 </ul>
             </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
