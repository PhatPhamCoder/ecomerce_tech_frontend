import React, { useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/styles";

const ProductDetails = ({ data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(1);
  const navigate = useNavigate();

  // Down count
  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // Up Count
  const inCrementCount = () => {
    setCount(count + 1);
  };

  const handleMessageSubmit = () => {
    navigate("/inbox?conversation=asdqweas123asd123");
  };

  return (
    <div className="bg-white">
      {data ? (
        <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
          {/* Product Main */}
          <div className="w-full py-5">
            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[50%]">
                <img
                  src={data.image_Url[select].url}
                  alt=""
                  className="w-[80%]"
                />
                <div className="w-full flex">
                  <div
                    className={`${
                      select === 0 ? "border" : "null"
                    } cursor-pointer`}
                  >
                    <img
                      src={data?.image_Url[0].url}
                      alt=""
                      className="h-[200px]"
                      onClick={() => setSelect(0)}
                    />
                  </div>
                  <div
                    className={`${
                      select === 0 ? "border" : "null"
                    } cursor-pointer`}
                  >
                    <img
                      src={data?.image_Url[0].url}
                      alt=""
                      className="h-[200px]"
                      onClick={() => setSelect(0)}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full 800px:w-[50%] pt-3">
                <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                <p>{data.description}</p>
                {/* Price */}
                <div className="flex pt-3">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    {data.discount_price}$
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {data.price ? data.price + "$" : null}
                  </h3>
                </div>

                {/* Add Crement */}
                <div className="flex items-center mt-12 justify-between pr-3">
                  {/* Count Crement */}
                  <div>
                    <button
                      onClick={decrementCount}
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                    >
                      -
                    </button>
                    <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[10px]">
                      {count}
                    </span>
                    <button
                      onClick={inCrementCount}
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-r px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                    >
                      +
                    </button>
                  </div>
                  {/* WishList */}
                  <div>
                    {click ? (
                      <AiFillHeart
                        size={22}
                        className="cursor-pointer"
                        onClick={() => setClick(!click)}
                        color={click ? "red" : "#333"}
                        title="Remove Form WishList"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={22}
                        className="cursor-pointer"
                        onClick={() => setClick(!click)}
                        color={click ? "red" : "#333"}
                        title="Add Form WishList"
                      />
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <div
                  className={`${styles.button} mt-6 rounded h-11 flex items-center`}
                >
                  <span className="text-white font-[600] flex items-center">
                    Add to Cart <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </div>
                <div className="flex items-center pt-8">
                  {/* Info Shop */}
                  <img
                    src={data.shop.shop_avatar.url}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full mr-2"
                  />
                  <div className="pr-8">
                    <h3 className={`${styles.shop_name} pb-1 pt-1`}>
                      {data.shop.name}
                    </h3>
                    <h5 className="pb-3 text-[15px]">
                      {data.shop.ratings} Reatings
                    </h5>
                  </div>
                  {/* Message Button */}
                  <div
                    className={`${styles.button} bg-[#6443d1] mt-4 rounded h-11`}
                    onClick={handleMessageSubmit}
                  >
                    <span className="text-white flex items-center">
                      Send Message <AiOutlineMessage className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Product Detail */}
          <ProductDetailInfo data={data} />
        </div>
      ) : null}
    </div>
  );
};

const ProductDetailInfo = ({ data }) => {
  const [active, setActive] = useState(1);
  return (
    <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded">
      <div className="w-full flex justify-between border-b pt-10 pb-2">
        {/* Product Detail */}
        <div className="relative">
          <h5
            className="text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            onClick={() => setActive(1)}
          >
            Product Detail
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        {/* Product Preview */}
        <div className="relative">
          <h5
            className="text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            onClick={() => setActive(2)}
          >
            Product Preview
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        {/* Seller Information */}
        <div className="relative">
          <h5
            className="text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            onClick={() => setActive(3)}
          >
            Seller Information
          </h5>
          {active === 3 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
      </div>

      {active === 1 ? (
        <>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            Technology is the application of scientific knowledge to the
            practical aims of human life or, as it is sometimes phrased, to the
            change and manipulation of the human environment1. It refers to
            methods, systems, and devices which are the result of scientific
            knowledge being used for practical purposes2. A technical
            description is a document created for the end-user to understand how
            a product, process, or concept works. A technical description
            typically includes the names of the product or process, gives a
            brief overview regarding its functions, and dives deep into its
            size, frames, and other components3. Could you please clarify what
            you meant by “technology”? Are you looking for a technical
            description of a specific technology or do you have a specific
            question about technology?
          </p>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            Customer experience (CX) is the result of every interaction a
            customer has with your business, from navigating the website to
            talking to customer service and receiving the product/service they
            bought from you. It can broadly be described as the perception a
            customer or a company has of a brand. CX is embedded into every
            interaction, and each interaction is an opportunity to build a
            stronger bond between the company and the customer—or has the
            potential to weaken that bond12. Could you please clarify what you
            meant by “customer experience”? Are you looking for a technical
            description of customer experience or do you have a specific
            question about customer experience?
          </p>
        </>
      ) : null}

      {active === 2 ? (
        <>
          <p className="w-full justify-center min-h-[40vh] flex items-center">
            No Review yet !
          </p>
        </>
      ) : null}

      {active === 3 ? (
        <>
          <p className="w-full block 800px:flex p-5">
            {/* Left */}
            <div className="w-full 800px:w-[50%]">
              <div className="flex items-center">
                <img
                  src={data.shop.shop_avatar.url}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div className="pl-3">
                  <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                  <h5 className="pb-3 text-[15px]">
                    ({data.shop.ratings}) Ratings
                  </h5>
                </div>
              </div>
              <p className="pt-2">
                Customer experience (CX) is the result of every interaction a
                customer has with your business, from navigating the website to
                talking to customer service and receiving the product/service
                they bought from you. It can broadly be described as the
                perception a customer or a company has of a brand. CX is
                embedded into every interaction, and each interaction is an
                opportunity to build a stronger bond between the company and the
                customer—or has the potential to weaken that bond12. Could you
                please clarify what you meant by “customer experience”? Are you
                looking for a technical description of customer experience or do
                you have a specific question about customer experience?
              </p>
            </div>

            {/* Right  */}
            <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
              <div className="text-left">
                <h5 className="font-[600]">
                  Joined on: <span className="font-[500]">15 March,2023</span>
                </h5>
                <h5 className="font-[600]">
                  Total Products: <span className="font-[500]">1,234</span>
                </h5>
                <h5 className="font-[600]">
                  Total Review: <span className="font-[500]">7,890</span>
                </h5>
                <Link to="https://www.facebook.com/phatphamstudio/">
                  <div
                    className={`${styles.button} rounded-[4px] h-[39.5px] mt-3`}
                  >
                    <h4 className="text-white">Contact Shop</h4>
                  </div>
                </Link>
              </div>
            </div>
          </p>
        </>
      ) : null}
    </div>
  );
};

export default ProductDetails;
