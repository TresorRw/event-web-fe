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
  event: {
    name: string;
    price: number;
  };
  paymentStatus: "pending" | "paid" | "cancelled";
}
