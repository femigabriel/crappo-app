import React from "react";
import EarnCalculator from "../component/calculator/EarnCalculator";
import Footer from "../component/footer/Footer";
import FooterSocials from "../component/footer/FooterSocials";
import Header from "../component/front/Header";
import Main from "../component/front/Main";
import Pillars from "../component/front/Pillars";
import Graph from "../component/main graph/Graph";
import GraphContent from "../component/main graph/GraphContent";
import MarkPortfolio from "../component/market/MarkPortfolio";
import Mobile from "../component/mobile/Mobile";
import Price from "../component/price/Price";
import EstimateCard from "../component/revenue/EstimateCard";
import EstimatedRevenue from "../component/revenue/EstimatedRevenue";
import Statistics from "../component/statistics/Statistics";
import Subscribe from "../component/subscribe/Subscribe";
import MobileHeader from "../component/mobile/MobileHeader";
import MobileGraph from "../component/mobile/MobileGraph";
import MobileWhy from "../component/mobile/MobileWhy";
import MobileCal from "../component/mobile/MobileCal";
import MobileEstimate from "../component/mobile/MobileEstimate";
import MobiEstimateCard from "../component/mobile/MobiEstimateCard";
import MobileMarket from "../component/mobile/MobileMarket";
import MobileStats from "../component/mobile/MobileStats";
import MobileSub from "../component/mobile/MobileSub";
import MobileFooter from "../component/mobile/MobileFooter";
import MobCalculator from "../component/mobile/MobCalculator";
import Calculator from "../component/calculator/Calculator";

function index() {
  return (
    <>
      <div className="general">
        <div className="home">
          <Header />
          <Main />
          <Pillars />
          <Graph />
          <GraphContent />
          <EarnCalculator />
        </div>
        <Calculator />
        <div className=" w-full bg-slate-50	">
          <EstimatedRevenue />
          <EstimateCard />
        </div>
        <div className="mark-portfolio bg-#2B076E">
          <MarkPortfolio />
          <Statistics />
          <Price />
        </div>
        <Subscribe />
        <Footer />
        <FooterSocials />
      </div>
      <div className="mobile-design ">
        <div className=" p-5">
          <Mobile />
          <MobileHeader />
          <MobileGraph />
          <MobileWhy />
          <MobileCal />
        </div>
        <MobCalculator />
        <div className=" w-full bg-slate-50	">
          <MobileEstimate />
          <MobiEstimateCard />
        </div>
        <div className="mark-portfolio bg-#2B076E">
          <MobileMarket />
          <MobileStats />
          <MobileSub />
        </div>
        <MobileFooter />
      </div>
    </>
  );
}

export default index;
