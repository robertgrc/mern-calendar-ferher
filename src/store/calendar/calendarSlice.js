import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvent = {
  title: "Cumpleanos del jefe",
  notes: "Hay que comprar pastel",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: "#fafafa",
  user: {
    _id: "123",
    name: "Robert",
  },
};

export const calendarSlice = createSlice({
  name: "ui",
  initialState: {
    events: [tempEvent],
    activeEvent: null,
  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
  },
});
//*Action creators are generated for each case reducer functions
export const { increment } = calendarSlice.actions;
