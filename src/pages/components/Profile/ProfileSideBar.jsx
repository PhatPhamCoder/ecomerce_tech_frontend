import React from "react";
import {
  AiOutlineCreditCard,
  AiOutlineLogout,
  AiOutlineMessage,
} from "react-icons/ai";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import { TbAddressBook } from "react-icons/tb";
import { MdOutlineTrackChanges } from "react-icons/md";
import { RxPerson } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const ProfileSideBar = ({ setActive, active }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white shadow-sm rounded-[10px] p-4 pt-8">
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(1) || navigate("/profile")}
      >
        <RxPerson size={20} color={active === 1 ? "red" : ""} />
        <span className={`${active === 1 ? "text-[red] font-bold" : ""} pl-3`}>
          Profile
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(2)}
      >
        <HiOutlineShoppingBag size={20} color={active === 2 ? "red" : ""} />
        <span className={`${active === 2 ? "text-[red] font-bold" : ""} pl-3`}>
          Orders
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(3) || navigate("/refund")}
      >
        <HiOutlineReceiptRefund size={20} color={active === 3 ? "red" : ""} />
        <span className={`${active === 3 ? "text-[red] font-bold" : ""} pl-3`}>
          Refunds
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(4) || navigate("/inbox")}
      >
        <AiOutlineMessage size={20} color={active === 4 ? "red" : ""} />
        <span className={`${active === 4 ? "text-[red] font-bold" : ""} pl-3`}>
          Inbox
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(5) || navigate("/track-order")}
      >
        <MdOutlineTrackChanges size={20} color={active === 5 ? "red" : ""} />
        <span className={`${active === 5 ? "text-[red] font-bold" : ""} pl-3`}>
          Track Order
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(6) || navigate("/payment-method")}
      >
        <AiOutlineCreditCard size={20} color={active === 6 ? "red" : ""} />
        <span className={`${active === 6 ? "text-[red] font-bold" : ""} pl-3`}>
          Payment Methods
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(7) || navigate("/payment-method")}
      >
        <TbAddressBook size={20} color={active === 7 ? "red" : ""} />
        <span className={`${active === 7 ? "text-[red] font-bold" : ""} pl-3`}>
          Address
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(7) || navigate("/payment-method")}
      >
        <AiOutlineLogout size={20} color={active === 7 ? "red" : ""} />
        <span className={`${active === 7 ? "text-[red] font-bold" : ""} pl-3`}>
          Log out
        </span>
      </div>
    </div>
  );
};

export default ProfileSideBar;
