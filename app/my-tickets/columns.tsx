"use client";
import { ITicket } from "@/interfaces";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableRowActions } from "./data-row-actions";

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
    id: "Actions",
    header: "Actions",
    cell: ({ row }) => <DataTableRowActions id={row.original._id} />,
  },
];

export default columns;
