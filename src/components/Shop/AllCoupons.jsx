/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct, getAllProductsShop } from "../../redux/actions/product";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import Loader from "../Layout/Loader";
import styles from "../../styles/styles";
import { RxCrossCircled } from "react-icons/rx";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

const AllCoupons = () => {
  const dispatch = useDispatch();
  const { seller } = useSelector((state) => state?.seller);
  console.log(seller);
  const { products, isLoading } = useSelector((state) => state.product);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [value, setValue] = useState(null);
  const [minAmount, setMinAmount] = useState(null);
  const [maxAmount, setMaxAmount] = useState(null);
  const [selectedProducts, setSelectedproducts] = useState(null);

  useEffect(() => {
    dispatch(getAllProductsShop(seller?._id));
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    dispatch(getAllProductsShop(seller?._id));
    window.location.reload();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(
        `${server}/coupon/create-coupon-code`,
        {
          name,
          minAmount,
          maxAmount,
          selectedProducts,
          value,
          shop: seller,
        },
        { withCredentials: true },
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const columns = [
    { field: "id", headerName: "Product ID", minWidth: 150, flex: 0.7 },
    { field: "name", headerName: "Name", minWidth: 180, flex: 1.4 },
    { field: "price", headerName: "Price", minWidth: 100, flex: 0.6 },
    { field: "Stock", headerName: "Stock", minWidth: 80, flex: 0.5 },
    {
      field: "sold",
      headerName: "Sold Out",
      type: "Number",
      minWidth: 130,
      flex: 0.6,
    },
    {
      field: "Action",
      headerName: "",
      minWidth: 100,
      flex: 0.5,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        const d = params.row.name;
        const product_name = d.replace(/\s+/g, "-");
        return (
          <>
            <Link to={`/product/${product_name}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
            <Button onClick={() => handleDelete(params?.id)}>
              <AiOutlineDelete size={20} />
            </Button>
          </>
        );
      },
    },
  ];

  const row = [];
  products &&
    products.forEach((item) => {
      row.push({
        id: item?._id,
        name: item.name,
        price: item.originalPrice + "VND",
        Stock: item.stock,
        sold: 10,
      });
    });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full mx-8 pt-1 mt-10 bg-white rounded-9">
          <div
            className={`${styles.button} ml-3 `}
            onClick={() => setOpen(true)}
          >
            <span className="text-white">Create a Coupon</span>
          </div>
          <DataGrid
            rows={row}
            columns={columns}
            pageSizeOptions={10}
            disableSelectionOnClick
            autoHeight
          />

          {open && (
            <div className="fixed top-0 left-0 w-full h-screen bg-[#00000062] z-[200000] flex items-center justify-center">
              <div className="800px:w-[40%] 800px:h-[60vh] h-[80vh] bg-white rounded-md shadow">
                <div className="flex justify-end">
                  <RxCrossCircled
                    className="cursor-pointer mr-3 mt-3"
                    size={40}
                    onClick={() => setOpen(false)}
                  />
                </div>
                <h5 className="800px:text-[30px] text-2xl font-Poppins text-center font-bold mt-3 mb-2">
                  Create Coupon Code
                </h5>
                {/* Create coupon code */}
                <form
                  onSubmit={handleSubmit}
                  className="ml-4 mr-4"
                  aria-required={true}
                >
                  <div className="pb-3">
                    <label className="pb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      id={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      placeholder="Enter your coupon name ...."
                    />
                  </div>
                  <div className="pb-3">
                    <label className="pb-2">
                      Discount Percent <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="value"
                      required
                      id={value}
                      onChange={(e) => setValue(e.target.value)}
                      className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      placeholder="Enter your discount percent ...."
                    />
                  </div>
                  <div className="pb-3">
                    <label className="pb-2">
                      Min Amount <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="minAmount"
                      id={minAmount}
                      onChange={(e) => setMinAmount(e.target.value)}
                      className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      placeholder="Enter your min amount ...."
                    />
                  </div>
                  <div className="pb-3">
                    <label className="pb-2">
                      Max Amount <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="maxAmount"
                      id={maxAmount}
                      onChange={(e) => setMaxAmount(e.target.value)}
                      className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      placeholder="Enter your max amount ...."
                    />
                  </div>
                  <div className="pb-3">
                    <label className="pb-2">
                      Selected Product <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="w-full mt-2 border h-[35px] rounded-[5px]"
                      value={selectedProducts}
                      onChange={(e) => setSelectedproducts(e.target.value)}
                    >
                      <option value="Choose a product">Choose a Product</option>
                      {products &&
                        products.map((i) => (
                          <option value={i.name} key={i.name}>
                            {i.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="pb-3">
                    <input
                      type="submit"
                      value="Create"
                      className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AllCoupons;
