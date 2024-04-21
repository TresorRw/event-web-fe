import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./button";
import ConfirmTicketForm from "./confirm-ticket";

const BuyTicketModal = ({ id, text }: { id: string; text: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-white w-full">{text}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-5 border-b pb-3">
            Confirm event ticket
          </DialogTitle>
          <DialogDescription asChild>
            <ConfirmTicketForm id={id} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default BuyTicketModal;
