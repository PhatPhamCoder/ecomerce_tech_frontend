import React from "react";
import DashboardHeader from "../../components/Layout/DashboradHeader";
import DashboardSiderBar from "../../components/Layout/DashboardSiderBar";
import CreateEvent from "../../components/Layout/CreateEvent.jsx";
const ShopCreateEvents = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex justify-between w-full">
        <div className="w-[60px] overflow-hidden 800px:w-[330px]">
          <DashboardSiderBar active={6} />
        </div>
        <div className="w-full flex justify-center">
          <CreateEvent />
        </div>
      </div>
    </div>
  );
};

export default ShopCreateEvents;
