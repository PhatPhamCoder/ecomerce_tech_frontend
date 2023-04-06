import React from "react";
import DashboardHeader from "../../components/Layout/DashboradHeader";
import DashboardSiderBar from "../../components/Layout/DashboardSiderBar";
import CreateProduct from "../../components/Shop/CreateProduct";
const ShopCreateProduct = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex items-center justify-between w-full">
        <div className="w-[60px] overflow-hidden 800px:w-[330px]">
          <DashboardSiderBar active={4} />
        </div>
        <div className="w-full flex justify-center">
          <CreateProduct />
        </div>
      </div>
    </div>
  );
};

export default ShopCreateProduct;
