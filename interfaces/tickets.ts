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
