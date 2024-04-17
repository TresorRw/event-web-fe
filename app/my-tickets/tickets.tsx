"use client";
import { ITicket, ITicketResponse } from "@/interfaces";
import { AxiosClient, returnAxiosError } from "@/lib";
import { useEffect, useState } from "react";
import { useStore } from "../store/useStore";
import { useAuthStore } from "../store/auth.store";
import { DataTable } from "./data-table";
import columns from "./columns";
import LoadingUI from "../loading";

const Tickets = () => {
  const [tickets, setTickets] = useState<ITicket[]>();
  const authToken = useStore(useAuthStore, (state) => state.authToken);

  useEffect(() => {
    if (authToken) {
      const getTickets = async () => {
        try {
          const tickets = await AxiosClient.get<ITicketResponse>("/tickets", {
            headers: { Authorization: `Bearer ${authToken}` },
          });
          setTickets(tickets.data.data);
        } catch (error) {
          return returnAxiosError(error);
        }
      };
      getTickets();
    }
  }, [authToken]);

  return (
    <>
      {tickets ? (
        <DataTable columns={columns()} data={tickets} />
      ) : (
        <LoadingUI />
      )}
    </>
  );
};

export default Tickets;
