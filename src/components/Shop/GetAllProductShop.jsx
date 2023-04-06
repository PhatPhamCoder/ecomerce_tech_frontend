import React, { useEffect } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct, getAllProductsShop } from "../../redux/actions/product";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import Loader from "../Layout/Loader";

const GetAllProductShop = () => {
  const { seller } = useSelector((state) => state?.seller);
  const { products, isLoading } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsShop(seller?._id));
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    window.location.reload();
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
    // {
    //   field: "Delete",
    //   headerName: "",
    //   minWidth: 120,
    //   flex: 0.8,
    //   type: "number",
    //   sortable: false,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <Button onClick={() => handleDelete(params?.id)}>
    //           <AiOutlineDelete size={20} />
    //         </Button>
    //       </>
    //     );
    //   },
    // },
  ];

  const row = [];
  products &&
    products.forEach((item) => {
      row.push({
        id: "VN" + (item?._id).substr(item?._id?.length - 8).toUpperCase(),
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
          <DataGrid
            rows={row}
            columns={columns}
            pageSizeOptions={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      )}
    </>
  );
};

export default GetAllProductShop;
