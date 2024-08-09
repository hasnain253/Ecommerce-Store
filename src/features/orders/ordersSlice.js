import { createSlice } from "@reduxjs/toolkit";
import { userOrders } from "../../utlis/userOrders";

const initialState = userOrders;

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      return action.payload;
    },
    updateOrderStatus: (state, action) => {
      const { orderId, status } = action.payload;
      const updatedOrders = state.map((order) => {
        if (order.orderId === orderId) {
          return { ...order, status };
        }
        return order;
      });
      return updatedOrders;
    },
  },
});

export const { setOrders, updateOrderStatus } = ordersSlice.actions;
export default ordersSlice.reducer;
