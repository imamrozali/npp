import { DateTime } from "luxon";

export interface Availability {
  id: string;
  interviewer: string; // for the sake of simplicity on the client side
  startDatetime: DateTime;
  endDatetime: DateTime;
  isBooked: boolean;
}
