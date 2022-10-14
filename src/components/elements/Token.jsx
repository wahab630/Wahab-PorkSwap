import React from "react";
import "./token.css";

const Token = () => {
  return (
    <>
      <div className="tokenbg">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12 py-5 ">
              <h1 className="text-center fw-bold my-5">
                Token <span className="video-head">Distribution</span>
              </h1>
            </div>
            <div className="col-lg-10 m-auto py-5">
              <div className="col token-img ">
                <div className="token-img-two">
                <div class="text">
                  <div class="text-three">
                    <h5 className="text-center">
                     <strong>10%</strong> 
                      <br />
                      <span>
                        <strong>
                        Growth Hacking
                        </strong>
                        </span> 
                    </h5>
                  </div>
                  <div class="text-four">
                  <h5 className="text-center">
                     <strong>20%</strong> 
                      <br />
                      <span>
                        <strong>
                        Public Sale
                        </strong>
                        </span> 
                    </h5>
                  </div>
                  
                  <div class="centertxt animated">
                  
                  <h5 className="text-center">
                     <strong>50%</strong> 
                      <br />
                      <span>
                        <strong>
                        Liquidity Rewards  <br />(Locked)
                        </strong>
                        </span> 
                    </h5>
                  </div>
                  <div class="text-one">
                    
                  <h5 className="text-center">
                     <strong>10%</strong> 
                      <br />
                      <span>
                        <strong>
                        Liquidity
                        </strong>
                        </span> 
                    </h5>
                  </div>
                  <div class="text-two">
                  <h5 className="text-center">
                     <strong>10%</strong> 
                      <br />
                      <span>
                        <strong>
                        Team - locked
                        </strong>
                        </span> 
                    </h5>
                  </div>
                </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Token;
