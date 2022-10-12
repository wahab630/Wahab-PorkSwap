import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
  title: "",
  rows: [
    {
      title: "What is PorkSwap?",
      content: `PorkSwap is a decentralized platform for spot and futures trading. You can trade any BEP-20 tokens on Binance Smart Chain. 
      It eliminates trusted intermediaries and unnecessary forms of rent extraction, 
      allowing for fast, efficient trading. Porkswap will be open-source under GPL license.`,
    },
    {
      title: "How do I use PorkSwap?",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "How does Spot Trading Work?",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "How does Futures Trading Work?",
      content: <p>current version is 1.2.1</p>,
    },
  ],
};

const styles = {
  // bgColor: 'white',
  // titleTextColor: "blue",
  // rowTitleColor: "blue",
  // rowContentColor: 'grey',
 
  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

const Faqs = () => {
  return (
    <>
    <div className="videobg py-5">
      <div className="container pb-5">
        <div className="row pb-5">
            <div className="col-lg-12 py-5">
                <h1 className="text-center fw-bold ">FAQs </h1>
            </div>
          <div className="col-lg-12">
            <Faq data={data} styles={styles} config={config} />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Faqs;
