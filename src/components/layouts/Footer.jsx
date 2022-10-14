import React from "react";
import "./footer.css";
import { FaMedium,FaTwitter,FaFacebookF,FaYoutube ,FaTelegram} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footercolor  ">
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-3 pt-2">
              <img
                className="footer-img"
                src="https://porkswap.finance/assets/images/logo.png"
                alt=""
              />
              <p>Decentralized Spot and Futures Trading on Binance Smart Chain</p>
            </div>
            <div className="col-lg-4 offset-lg-5 text-center">
              <ul className="list-unstyled d-flex justify-content-center">
                <li className="me-2">  <FaMedium size={30}/> </li>
                <li className="me-2"> <FaTwitter size={30}/> </li>
                <li className="me-2">  <FaFacebookF size={30}/> </li>
                <li className="me-2">  <FaYoutube size={30}/> </li>
                <li className="me-2">  <FaTelegram size={30}/> </li>
              </ul>
              <p>exchange@porkswap.finance</p>
            </div>
            <div className="col-lg-12">
              <hr className="footer-line" />
            </div>
            <div className="col-lg-12">
             <p className="text-center">Copyright © 2022 PorkSwap.finance</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
