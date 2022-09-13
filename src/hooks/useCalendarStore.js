import { useDispatch, useSelector } from "react-redux";
import calendarApi from "../api/calendarApi";

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
  const { user } = useSelector((state) => state.auth);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    //TODO: Update event
    if (calendarEvent._id) {
      //Actualizando
      // dispatch( onUpdateEvent(calendarEvent))
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      //Creando
      const { data } = await calendarApi.post("./events", calendarEvent);
      dispatch(onAddNewEvent({ ...calendarEvent, id: data.evento.id, user }));
    }
  };

  const startDeletingEvent = () => {
    //Todo:llegar al backend
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
