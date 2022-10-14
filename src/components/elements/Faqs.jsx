
import Faq from "react-faq-component";
import './faqs.css'

const data = {
  
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
        "First you’ll need a Binance Smart Chain Wallet and some BNB. Once completed, head over to the app to start using the platform to provide liquidity to spot or leverage pool and place orders. Remember that each transaction on BSC costs BNB (this is called the “gas fee” and it’s paid to miners to keep the network running).",
    },
    {
      title: "How does Spot Trading Work?",
      content: `PorkSwap uses an improved version of Uniswap's automated market maker protocol by utilizing liquidity pools.

      In practical terms this means there are template smart contracts that define a standard way to make liquidity pools and corresponding markets that are compatible with each other. There is no orderbook, no centralized party and no central facilitator of trade. Each pool is defined by a smart contract that includes a few functions to enable swapping tokens, adding liquidity and more. At its core each pool uses the function x*y=k to maintain a curve along which trades can happen. The pools keep track of reserves(liquidity) and update those reserves every single time someone trades. Because the reserves are automatically rebalanced a Porkswap pool can always be used to buy or sell a token without requiring a counterparty on the other side of your trade. `,
    },
    {
      title: "How does Futures Trading Work?",
      content: `PorkSwap uses oracles for determining real-time price of tokens, which then can be leveraged by borrowing liquidity from the lending pool. You can leverage a trade up to 5X, when you use leverage, you're given Proxy tokens which can later be exchanged to real underlying tokens when you close a leveraged trade.

      Borrowing funds cost around 2.4% interest per day, if you provide liquidity to the lending pool you make 2.4% on funds borrowed from you.
      
      To reward initial liquidity providers, we tend to prioritize funds on a first-come first serve basis.
      
      Since primary input to oracle is current spot platform pricing, that is refreshed on each trade and new block mined when your futures trade hits the liquidation price the smart contract automatically liquidates and closes your position and returns borrowed funds back to the lending pool.`,
    },
    {
      title: "How are prices determined?",
      content: `Prices are determined by the amount of tokens against liquidity in each pool. The smart contract maintains a constant using the following formula: price = liquidity / tokens. In this case liquidity = base token, y = trading token.

      For each trade a certain amount of tokens are removed from the pool for an amount of the other token. To maintain price, the balances held by the smart contract are adjusted during the execution of the trade and each block mined, therefore changing the price `,
    },
    {
      title: "How can I add a token to PorkSwap?",
      content: `PorkSwap uses an improved version of Uniswap's automated market maker protocol by utilizing liquidity pools.

      In practical terms this means there are template smart contracts that define a standard way to make liquidity pools and corresponding markets that are compatible with each other. There is no orderbook, no centralized party and no central facilitator of trade. Each pool is defined by a smart contract that includes a few functions to enable swapping tokens, adding liquidity and more. At its core each pool uses the function x*y=k to maintain a curve along which trades can happen. The pools keep track of reserves(liquidity) and update those reserves every single time someone trades. Because the reserves are automatically rebalanced a Porkswap pool can always be used to buy or sell a token without requiring a counterparty on the other side of your trade. `,
    },
    {
      
      title: "What tokens will be available for leveraged trading?",
      content: `PorkSwap uses an improved version of Uniswap's automated market maker protocol by utilizing liquidity pools.

      In practical terms this means there are template smart contracts that define a standard way to make liquidity pools and corresponding markets that are compatible with each other. There is no orderbook, no centralized party and no central facilitator of trade. Each pool is defined by a smart contract that includes a few functions to enable swapping tokens, adding liquidity and more. At its core each pool uses the function x*y=k to maintain a curve along which trades can happen. The pools keep track of reserves(liquidity) and update those reserves every single time someone trades. Because the reserves are automatically rebalanced a Porkswap pool can always be used to buy or sell a token without requiring a counterparty on the other side of your trade. `,
    }
  ]
};

const styles = {
  // bgColor: 'transparent',
  // titleTextColor: "blue",
  // rowTitleColor: "blue",
  // rowContentColor: 'grey',
  // arrowColor: "red",
  //  titleTextSize: '48px',
   rowContentTextSize: '20px',
  //  rowContentPaddingBottom: '10px',
  //  rowContentMarginBottom: '100px',
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
