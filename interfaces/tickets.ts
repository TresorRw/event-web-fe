import { IEvent } from "./events";

export interface ITicketResponse {
  statusCode: number;
  message: string;
  data: ITicket[];
}

export interface ITicket {
  _id: string;
  contactName: string;
  contactNumber: string;
  ticketToken: string;
  createdAt: Date;
  event: ITicketEvent;
  paymentStatus: "pending" | "paid" | "cancelled";
}

export interface ITicketEvent {
  name: string;
  price: number;
}

export interface ITicketEventDetails extends IEvent {}

export interface ITicketDetails extends ITicket {
  event: ITicketEventDetails;
}
export interface ITicketDetailsResponse {
  statusCode: number;
  message: string;
  data: ITicket;
}
