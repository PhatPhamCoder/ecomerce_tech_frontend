import React from "react";
import styles from "../../styles/styles";
import ShopInfo from "../../../src/components/Shop/ShopInfo";
import ShopProfileData from "../../../src/components/Shop/ShopProfileData.jsx";
const ShopHomePage = () => {
  return (
    <div className={`${styles.section} bg-[#f5f5f5]`}>
      <div className="w-full flex py-10 justify-between">
        <div className="preview-product w-[25%] h-[90vh] bg-[#fff] rounded-[4px] shadow-sm overflow-y-scroll sticky top-10 left-0 z-10">
          <ShopInfo isOwner={true} />
        </div>
        <div className="w-[72%] rounded-[4px]">
          <ShopProfileData isOwner={true} />
        </div>
      </div>
    </div>
  );
};

export default ShopHomePage;
