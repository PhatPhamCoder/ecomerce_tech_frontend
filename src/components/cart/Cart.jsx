import React from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../../styles/styles";
import { IoBagCheckOutline } from "react-icons/io";

const Cart = ({ setOpenCart }) => {
  const cartData = [
    {
      name: "Iphone 14 Pro max 256GB ssd ram silver color",
      description: "test",
      price: 999,
    },
    {
      name: "Iphone 14 Pro max 256GB ssd ram silver color",
      description: "test",
      price: 999,
    },
    {
      name: "Iphone 14 Pro max 256GB ssd ram silver color",
      description: "test",
      price: 999,
    },
  ];
  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex w-full justify-end pt-5 pr-5">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenCart(false)}
            />
          </div>
          {/* Item length */}
          <div className={`${styles.noramlFlex} p-4`}>
            <IoBagCheckOutline size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
