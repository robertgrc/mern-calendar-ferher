import { useDispatch, useSelector } from "react-redux";
// import { onSetActiveEvent } from "../store/calendar/calendarSlice";
import {
  onAddNewEvent,
  onSetActiveEvent,
  onUpdateEvent,
  onDeleteEvent,
} from "../store";

export const useCalendarStore = () => {
  const dispatch = useDispatch();

  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    //TODO: llegar al backend

    //Todo bien
    if (calendarEvent._id) {
      //Actualizando
      // dispatch( onUpdateEvent(calendarEvent))
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };

  const startDeletingEvent = () => {
    dispatch(onDeleteEvent());
  };

  return {
    //*Propiedades
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,
    //*Metodos
    startDeletingEvent,
    setActiveEvent,
    startSavingEvent,
  };
};
