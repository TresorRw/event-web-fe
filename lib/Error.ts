import { toast } from "@/components/ui/use-toast";
import { AxiosError } from "axios";

export const returnAxiosError = (error: any) => {
  if (error instanceof AxiosError) {
    if (!error.response) {
      toast({
        title: "Internet Connection Problem",
        description: "Try again later after fixing the problem",
        variant: "destructive"
      });
    } else {
      if (error.response.data.errors) {
        toast({
          title: error.response.data.message,
          description: error.response.data.errors.join("\n \n"),
        })
      } else {
        toast({
          title: error.response.data.message,
        })
      }
    }
  }
}