import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../../styles/styles";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
const Wishlist = ({ setOpenWishList }) => {
  const cartData = [
    {
      name: "Iphone 14 Pro max 256GB ssd ram silver color",
      description: "test",
      price: 999,
    },
    {
      name: "Iphone 14 Pro max 256GB ssd ram silver color",
      description: "test",
      price: 1999,
    },
    {
      name: "Iphone 14 Pro max 256GB ssd ram silver color",
      description: "test",
      price: 2999,
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
              onClick={() => setOpenWishList(false)}
            />
          </div>
          {/* Item length */}
          <div className={`${styles.noramlFlex} p-4`}>
            <AiOutlineHeart size={25} />
            <h5 className="pl-2 text-[20px] font-[500]">3 items</h5>
          </div>
          {/* Wishlist single Item */}
          <br />
          <div className="w-full border-t">
            {cartData &&
              cartData.map((i, index) => <CarSingle key={index} data={i} />)}
          </div>
        </div>
        <div className="px-5 mb-3">
          {/* Check out button */}{" "}
          <Link to="/checkout">
            <div className="h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]">
              <h1 className="text-[#fff] text-[18px] font-[600]">
                Check Out (USD$1080)
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CarSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;
  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <RxCross1 className="cursor-pointer" />
        <img
          src="https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png"
          className="w-[80px] h-[80px] ml-2"
          alt=""
        />
        <div className="pl-[5px]">
          <h1>{data.name}</h1>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#e44343]">
            US ${totalPrice}
          </h4>
        </div>
        <div>
          <BsCartPlus
            size={20}
            className="cursor-pointer"
            title="Add to Cart"
          />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
