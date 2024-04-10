import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./button"
import ConfirmTicketForm from "./confirm-ticket"

const BuyTicketModal = ({ id, text }: { id: string, text: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-white w-full">{text}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm event ticket</DialogTitle>
          <DialogDescription className="mt-10" asChild>
            <ConfirmTicketForm id={id} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>

  )
}

export default BuyTicketModal