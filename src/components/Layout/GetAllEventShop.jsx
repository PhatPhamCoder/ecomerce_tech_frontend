import React, { useEffect } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import Loader from "../Layout/Loader";
import { deleteEvent, getAllEventsShop } from "../../redux/actions/event";

const GetAllEventShop = () => {
  const { events, isLoading } = useSelector((state) => state.event);
  const { seller } = useSelector((state) => state?.seller);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEventsShop(seller?._id));
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteEvent(id));
    window.location.reload();
  };

  const columns = [
    { field: "id", headerName: "Event ID", minWidth: 150, flex: 0.7 },
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
      field: "Date",
      headerName: "Start Date",
      type: "text",
      minWidth: 130,
      flex: 0.6,
    },
    {
      field: "Date",
      headerName: "Start Date",
      type: "Date",
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
        const event_name = d.replace(/\s+/g, "-");
        return (
          <>
            <Link to={`/event/${event_name}`}>
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
  events &&
    events.forEach((item) => {
      row.push({
        id: item?._id,
        name: item.name,
        price: item.originalPrice - item.discountPrice + " VND",
        Stock: item.stock,
        sold: 10,
        start_date: item.start_date,
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

export default GetAllEventShop;
