import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const eventReducer = createReducer(initialState, {
  EventCreateRequest: (state) => {
    state.isLoading = true;
  },

  EventCreateSuccess: (state, action) => {
    state.isLoading = false;
    state.success = true;
    state.product = action.payload;
  },

  EventCreateFail: (state, action) => {
    state.isLoading = false;
    state.success = false;
    state.error = action.payload;
  },

  // Get All Event
  getAllEventShopRequest: (state) => {
    state.isLoading = true;
  },

  getAllEventsShopSuccess: (state, action) => {
    state.isLoading = false;
    state.events = action.payload;
  },

  getAllEventsShopFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // Delete Event
  deleteEventRequest: (state) => {
    state.isLoading = true;
  },

  deleteEventSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload;
  },

  deleteEventFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  clearErrors: (state) => {
    state.error = null;
  },
});
