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
            <div className="col-lg-12">
              <table class="table">
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
                  <tr>
                    <th scope="row">Automated Market Maker</th>
                    <td className="text-center ">
                      {" "}
                      <FaCheck />{" "}
                    </td>
                    <td className="text-center">
                      {" "}
                      <FaCheck />{" "}
                    </td>
                    <td className="text-center">
                      {" "}
                      <FaCheck />{" "}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Spot Trading</th>
                    <td className="text-center">
                      {" "}
                      <FaCheck />{" "}
                    </td>
                    <td className="text-center">
                      {" "}
                      <FaCheck />{" "}
                    </td>
                    <td className="text-center">
                      {" "}
                      <FaCheck />{" "}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Futures Trading</th>
                    <td className="text-center">
                      {" "}
                      <GiCrossMark />{" "}
                    </td>
                    <td className="text-center">
                      {" "}
                      <GiCrossMark />{" "}
                    </td>
                    <td className="text-center">
                      {" "}
                      <FaCheck />{" "}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Governance</th>
                    <td className="text-center">
                      {" "}
                      <FaCheck />{" "}
                    </td>
                    <td className="text-center">
                      {" "}
                      <FaCheck />{" "}
                    </td>
                    <td className="text-center">
                      {" "}
                      <FaCheck />{" "}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Leveraged Trading</th>
                    <td className="text-center">
                      {" "}
                      <GiCrossMark />{" "}
                    </td>
                    <td className="text-center">
                      {" "}
                      <GiCrossMark />{" "}
                    </td>
                    <td className="text-center">
                      {" "}
                      <FaCheck />{" "}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Gas Fees</th>
                    <td className="text-center"> $71.53 </td>
                    <td className="text-center"> $0.42 </td>
                    <td className="text-center"> $0.42 </td>
                  </tr>
                  <tr>
                    <th scope="row">Inflationary</th>
                    <td className="text-center">
                      {" "}
                      <FaCheck />{" "}
                    </td>
                    <td className="text-center">
                      {" "}
                      <FaCheck />{" "}
                    </td>
                    <td className="text-center">
                      {" "}
                      <GiCrossMark />{" "}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Deflationary</th>
                    <td className="text-center">
                      {" "}
                      <GiCrossMark />
                    </td>
                    <td className="text-center">
                      <GiCrossMark />{" "}
                    </td>
                    <td className="text-center">
                      {" "}
                      <FaCheck />{" "}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Fixed Supply</th>
                    <td className="text-center">
                      {" "}
                      <FaCheck />{" "}
                    </td>
                    <td className="text-center">
                      {" "}
                      <GiCrossMark />{" "}
                    </td>
                    <td className="text-center">
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
