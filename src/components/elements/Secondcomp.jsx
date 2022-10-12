import React from 'react'
import './secondcomp.css'

const Secondcomp = () => {
  return (
    <>
    <div className="container">
        <div className="row">
          
          <div className="col-lg-12 d-flex my-5 py-5">
            <div className="col-md-3">
              <img
                className="second-comp-img mt-2"
                src="https://porkswap.finance/assets/images/featured/cmc-logo.png"
                alt=""
              />
            </div>
            <div className="col-md-3">
              <img
                className="second-comp-img  mt-2"
                src="https://porkswap.finance/assets/images/featured/cg-logo.webp"
                alt=""
              />
            </div>
            <div className="col-md-3">
              <img
                className="second-comp-img  mt-2 "
                src="https://porkswap.finance/assets/images/featured/hb-logo.png"
                alt=""
              />
            </div>
            <div className="col-md-3">
              <img
                className="second-comp-img  mt-2"
                src=" https://porkswap.finance/assets/images/featured/cb-logo.png"
                alt=""
              />
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default Secondcomp