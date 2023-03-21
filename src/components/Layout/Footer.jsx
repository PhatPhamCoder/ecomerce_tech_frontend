import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";

const Footer = () => {
  return (
    <div className="bg-[#000] text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#342ac8] py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#56d879]">Subscribe</span> us for get news
          envent and offers <br />
        </h1>
        {/* Input Email Sale */}
        <div>
          <input
            type="email"
            required
            placeholder="Enter your Email..."
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-[#56d879] hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-white md:w-auto w-full">
            Submit
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        {/* Social Icon */}
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img
            src="https://corporate.bestbuy.com/wp-content/uploads/thegem-logos/logo_c9a81eefcd2b607f12bbc281aaad3f15_1x.png"
            alt=""
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <br />
          <p>The home and elements needed to create beautiful products.</p>
          <div className="flex items-center mt-[12px] gap-[10px]">
            <AiOutlineFacebook size={30} className="cursor-pointer" />
            <AiOutlineTwitter size={30} className="cursor-pointer" />
            <AiOutlineInstagram size={30} className="cursor-pointer" />
            <AiOutlineWhatsApp size={30} className="cursor-pointer" />
          </div>
        </ul>
        {/* Company */}
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Company</h1>
          {footercompanyLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.link}
                className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Support */}
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Support</h1>
          {footerSupportLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.link}
                className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Product */}
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Product</h1>
          {footerProductLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.link}
                className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
        <span>Term - Privacy Plicy</span>
        <div>
          <img
            src="https://www.wallingfordtowncouncil.gov.uk/wp-content/uploads/sites/84/2023/01/stripe-payment-logo-1.png"
            style={{ width: "300px", height: "100px" }}
            alt=""
          />
        </div>
      </div> */}
      <div className="flex items-center justify-center border-t-2 border-[#334] py-2">
        <span className="mx-atuo text-center">
          &copy; {new Date().getFullYear()} PTech. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
