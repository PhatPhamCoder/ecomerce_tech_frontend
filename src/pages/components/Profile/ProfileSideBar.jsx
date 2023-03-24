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
import axios from "axios";
import { server } from "../../../server";
import { toast } from "react-toastify";

const ProfileSideBar = ({ setActive, active }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success("Logout Successfully");
        window.location.reload(true);
        navigate("/login");
      })
      .catch((error) => {
        console.error(error.response.data.message);
        toast.error("Logout Failed ");
      });
  };
  return (
    <div className="w-full bg-white shadow-sm rounded-[10px] p-4 pt-8">
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(1) || navigate("/profile")}
      >
        <RxPerson size={20} color={active === 1 ? "red" : ""} />
        <span
          className={`${
            active === 1 ? "text-[red] font-bold" : ""
          } pl-3 800px:block hidden`}
        >
          Profile
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(2)}
      >
        <HiOutlineShoppingBag size={20} color={active === 2 ? "red" : ""} />
        <span
          className={`${
            active === 2 ? "text-[red] font-bold" : ""
          } pl-3 800px:block hidden`}
        >
          Orders
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(3)}
      >
        <HiOutlineReceiptRefund size={20} color={active === 3 ? "red" : ""} />
        <span
          className={`${
            active === 3 ? "text-[red] font-bold" : ""
          } pl-3 800px:block hidden`}
        >
          Refunds
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(4) || navigate("/inbox")}
      >
        <AiOutlineMessage size={20} color={active === 4 ? "red" : ""} />
        <span
          className={`${
            active === 4 ? "text-[red] font-bold" : ""
          } pl-3 800px:block hidden`}
        >
          Inbox
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(5)}
      >
        <MdOutlineTrackChanges size={20} color={active === 5 ? "red" : ""} />
        <span
          className={`${
            active === 5 ? "text-[red] font-bold" : ""
          } pl-3 800px:block hidden`}
        >
          Track Order
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(6)}
      >
        <AiOutlineCreditCard size={20} color={active === 6 ? "red" : ""} />
        <span
          className={`${
            active === 6 ? "text-[red] font-bold" : ""
          } pl-3 800px:block hidden`}
        >
          Payment Methods
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(7)}
      >
        <TbAddressBook size={20} color={active === 7 ? "red" : ""} />
        <span
          className={`${
            active === 7 ? "text-[red] font-bold" : ""
          } pl-3 800px:block hidden`}
        >
          Address
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(8) || handleLogOut()}
      >
        <AiOutlineLogout size={20} color={active === 8 ? "red" : ""} />
        <span
          className={`${
            active === 8 ? "text-[red] font-bold" : ""
          } pl-3 800px:block hidden`}
        >
          Log out
        </span>
      </div>
    </div>
  );
};

export default ProfileSideBar;
