"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { AxiosClient, returnAxiosError } from "@/lib";
import { useState } from "react";
import { useAuthStore } from "../store/auth.store";
import { useStore } from "../store/useStore";
import { toast } from "@/components/ui/use-toast";

export function DeleteTicketConfirm({ id }: { id: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const authToken = useStore(useAuthStore, (state) => state.authToken);

  const deleteTicket = async () => {
    setLoading(true);
    if (authToken) {
      try {
        const response = await AxiosClient.delete(`/tickets/${id}/cancel`, {
          headers: { Authorization: `Bearer ${authToken}` },
        });
        toast({
          title: "Success",
          description: response.data.message,
        });
        window.location.reload();
      } catch (error) {
        setLoading(false);
        return returnAxiosError(error);
      }
    }
  };

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          onClick={() => {
            setIsOpen(true);
          }}
          size={"sm"}
          className="bg-red-700 hover:bg-red-900 text-white"
        >
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            ticket!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setIsOpen(false)}>
            Cancel
          </AlertDialogCancel>
          <Button
            onClick={() => {
              deleteTicket();
            }}
            disabled={loading}
            aria-disabled={loading}
            className="bg-red-700 hover:bg-red-900 text-white"
          >
            {loading ? "Deleting..." : "Yes, delete"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
