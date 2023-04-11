import React from "react";
import DashboardHeader from "../../components/Layout/DashboradHeader";
import DashboardSiderBar from "../../components/Layout/DashboardSiderBar";
import AllCoupons from "../../components/Shop/AllCoupons.jsx";
const ShopAllCoupons = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex justify-between w-full">
        <div className="w-[60px] overflow-hidden 800px:w-[330px]">
          <DashboardSiderBar active={9} />
        </div>
        <div className="w-full flex justify-center">
          <AllCoupons />
        </div>
      </div>
    </div>
  );
};

export default ShopAllCoupons;
