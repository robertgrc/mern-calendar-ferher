import { parseISO } from "date-fns";

export const convertEventsToDateEvents = (events = []) => {
  return events.map((event) => {
    event.end = parseISO(event.start);
    event.start = parseISO(event.start);
  });
};
