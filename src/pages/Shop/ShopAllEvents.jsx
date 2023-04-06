import React from "react";
import DashboardHeader from "../../components/Layout/DashboradHeader";
import DashboardSiderBar from "../../components/Layout/DashboardSiderBar";
import GetAllEventShop from "../../components/Layout/GetAllEventShop";
const ShopAllEvents = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex justify-between w-full">
        <div className="w-[60px] overflow-hidden 800px:w-[330px]">
          <DashboardSiderBar active={5} />
        </div>
        <div className="w-full flex justify-center">
          <GetAllEventShop />
        </div>
      </div>
    </div>
  );
};

export default ShopAllEvents;
