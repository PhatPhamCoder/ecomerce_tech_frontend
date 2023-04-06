import React from "react";
import DashboardHeader from "../../components/Layout/DashboradHeader";
import DashboardSiderBar from "../../components/Layout/DashboardSiderBar";
import GetAllProductShop from "../../components/Shop/GetAllProductShop";
const ShopAllProducts = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex justify-between w-full">
        <div className="w-[60px] overflow-hidden 800px:w-[330px]">
          <DashboardSiderBar active={3} />
        </div>
        <div className="w-full flex justify-center">
          <GetAllProductShop />
        </div>
      </div>
    </div>
  );
};

export default ShopAllProducts;
