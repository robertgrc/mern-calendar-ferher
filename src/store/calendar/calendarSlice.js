import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvent = {
  _id: new Date().getTime(),
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
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload);
      //*con esta linea de codigo limpio el elemento activo
      //* y estoy listo para escuchar la siguiente nota
      state.onSetActiveEvent = null;
    },
  },
});
//*Action creators are generated for each case reducer functions
export const { onSetActiveEvent, onAddNewEvent } = calendarSlice.actions;
