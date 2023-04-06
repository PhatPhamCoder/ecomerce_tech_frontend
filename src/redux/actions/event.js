import axios from "axios";
import { server } from "../../server";

// Create event
export const createEvent = (newForm) => async (dispatch) => {
  try {
    dispatch({
      type: "EventCreateRequest",
    });

    const config = { headers: { "Content-type": "multipart/form-data" } };

    const { data } = await axios.post(
      `${server}/event/create-event`,
      newForm,
      config,
    );
    dispatch({
      type: "EventCreateSuccess",
      payload: data.event,
    });
  } catch (error) {
    dispatch({
      type: "EventCreateFail",
      payload: error.response.data.message,
    });
  }
};

// Get All Events
export const getAllEventsShop = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllEventShopRequest",
    });

    const { data } = await axios.get(`${server}/event/get-all-event/${id}`);

    dispatch({
      type: "getAllEventsShopSuccess",
      payload: data.events,
    });
  } catch (error) {
    dispatch({
      type: "getAllEventsShopFailed",
      payload: error.response.data.message,
    });
  }
};

// Delete event of a shop
export const deleteEvent = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteEventRequest",
    });

    const { data } = await axios.delete(
      `${server}/event/delete-shop-event/${id}`,
      {
        withCredentials: true,
      },
    );
    dispatch({
      type: "deleteEventSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteEventFailed",
      payload: error.response.data.message,
    });
  }
};
