"use client";
import { ITicket } from "@/interfaces";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { convertDate } from "@/lib";
import { DeleteTicketConfirm } from "./delete-ticket";

const columns = (): ColumnDef<ITicket>[] => [
  {
    header: "#",
    cell: ({ row }) => {
      return row.index + 1;
    },
  },
  { accessorKey: "contactName", header: "Contact Name" },
  { accessorKey: "contactNumber", header: "Contact Number" },
  {
    header: "Event Name",
    cell({ row }) {
      return row.original.event.name;
    },
  },
  {
    header: "Price",
    cell({ row }) {
      return row.original.event.price;
    },
  },
  { accessorKey: "paymentStatus", header: "Payment Status" },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell(props) {
      return convertDate(props.row.original.createdAt);
    },
  },
  {
    id: "Actions",
    header: "Actions",
    cell: ({ row }) => <DeleteTicketConfirm id={row.original._id} />,
  },
];

export default columns;
