import React from "react";
import "./table.css";
import { FaCheck } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";

const ComparisonTable = () => {
  return (
    <>
      <div className="videobg ">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-12 py-4">
              <h1 className="text-center fw-bold">Comparison Table</h1>
              <p className="platfoam-para text-center">
                We are building whole ecosystem tools for future identities and
                data.
              </p>
            </div>
           
          </div>
          <div className="row">
          <div className="col-lg-12">
              <table class="table table-light table-striped table-lg">
                <tbody>
                  <tr>
                    <td>&nbsp;</td>
                    <td className="text-center">
                      <img
                        className="table-img"
                        src="https://porkswap.finance/assets/images/uniswap.png"
                        alt=""
                      />
                    </td>
                    <td className="text-center">
                      <img
                        className="table-img "
                        src="https://porkswap.finance/assets/images/pancakeswap.png"
                        alt=""
                      />
                    </td>
                    <td className="text-center">
                      <img
                        className="table-img"
                        src="https://porkswap.finance/assets/images/logo.png"
                        alt=""
                      />
                    </td>
                  </tr>
                  <tr >
                    
                    <td className=" py-3 fw-bold ps-3">Automated Market Maker</td>
                    <td className="text-center py-3 ">
                      
                      <FaCheck />
                    </td>
                    <td className="text-center py-3">
                      
                      <FaCheck />
                    </td>
                    <td className="text-center py-3">
                      
                      <FaCheck />
                    </td>
                  </tr>
                  <tr>
                    <td className=" py-3 fw-bold ps-3">Spot Trading</td>
                    <td className="text-center py-3">
                      {" "}
                      <FaCheck />{" "}
                    </td>
                    <td className="text-center py-3">
                      {" "}
                      <FaCheck />{" "}
                    </td>
                    <td className="text-center py-3">
                      {" "}
                      <FaCheck />{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className=" py-3  ps-3 fw-bold">Futures Trading</td>
                    <td className="text-center py-3">
                      {" "}
                      <GiCrossMark />{" "}
                    </td>
                    <td className="text-center py-3">
                      {" "}
                      <GiCrossMark />{" "}
                    </td>
                    <td className="text-center py-3">
                      {" "}
                      <FaCheck />{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className=" py-3 ps-3 fw-bold">Governance</td>
                    <td className="text-center py-3">
                      {" "}
                      <FaCheck />{" "}
                    </td>
                    <td className="text-center py-3">
                      {" "}
                      <FaCheck />{" "}
                    </td>
                    <td className="text-center py-3">
                      {" "}
                      <FaCheck />{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className=" py-3 ps-3 fw-bold">Leveraged Trading</td>
                    <td className="text-center py-3">
                      {" "}
                      <GiCrossMark />{" "}
                    </td>
                    <td className="text-center py-3">
                      {" "}
                      <GiCrossMark />{" "}
                    </td>
                    <td className="text-center py-3">
                      {" "}
                      <FaCheck />{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className=" py-3 ps-3 fw-bold">Gas Fees</td>
                    <td className="text-center py-3"> $71.53 </td>
                    <td className="text-center py-3"> $0.42 </td>
                    <td className="text-center py-3"> $0.42 </td>
                  </tr>
                  <tr>
                    <td className=" py-3  ps-3 fw-bold">Inflationary</td>
                    <td className="text-center py-3">
                      {" "}
                      <FaCheck />{" "}
                    </td>
                    <td className="text-center py-3">
                      {" "}
                      <FaCheck />{" "}
                    </td>
                    <td className="text-center py-3">
                      {" "}
                      <GiCrossMark />{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className=" py-3  ps-3 fw-bold">Deflationary</td>
                    <td className="text-center py-3">
                      {" "}
                      <GiCrossMark />
                    </td>
                    <td className="text-center py-3">
                      <GiCrossMark />{" "}
                    </td>
                    <td className="text-center py-3">
                      {" "}
                      <FaCheck />{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className=" py-3  ps-3 fw-bold">Fixed Supply</td>
                    <td className="text-center py-3">
                      {" "}
                      <FaCheck />{" "}
                    </td>
                    <td className="text-center py-3">
                      {" "}
                      <GiCrossMark />{" "}
                    </td>
                    <td className="text-center py-3">
                      {" "}
                      <FaCheck />{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComparisonTable;
