import React from "react";
import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="logo-img" src="https://porkswap.finance/assets/images/logo.png" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link "
                 
                 
                >
                  home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="./login" className="nav-link " >
                  login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="./login" className="nav-link " >
                  login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="./login" className="nav-link " >
                  login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="./signup" className="nav-link">
                  sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
