import React from "react";
import "./token.css";

const Token = () => {
  return (
    <>
      <div className="tokenbg">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12">
              <h1 className="text-center fw-bold my-5">
                Token <span className="video-head">Distribution</span>
              </h1>
            </div>
            <div className="col-lg-10 m-auto py-5">
              <div className="col token-img ">
                <div class="position-relative">
                  <div class="position-absolute top-0 start-0">
                    <h5>
                      10%
                      <br />
                      Growth Hacking
                    </h5>
                  </div>
                  <div class="position-absolute top-100 end-0">
                    <h5>
                      20%
                      <br />
                      Public Sale <br />
                    </h5>
                  </div>
                  <div class="position-absolute top-50 start-50"></div>
                  <div class="position-absolute bottom-50 end-50">
                  
                    <h5>
                      50% <br />
                      Liquidity Rewards <br /> (Locked)
                    </h5>
                  </div>
                  <div class="position-absolute bottom-0 start-0">
                    
                    <h5>
                      10%
                      <br />
                      Liquidity
                    </h5>
                  </div>
                  <div class="position-absolute bottom-0 end-0">
                    <h5>
                      10%
                      <br />
                      Team - locked
                    </h5>
                  </div>
                </div>

                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Token;
