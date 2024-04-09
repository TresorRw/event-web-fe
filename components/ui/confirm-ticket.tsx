"use client";

import { useAuthStore } from "@/app/store/auth.store";
import { useStore } from "zustand";
import { FormField, FormItem, FormLabel, FormControl } from "./form"
import { Input } from "./input"
import { Button } from "./button"
import LoginRequired from "./login-required";
import { useToast } from "@/components/ui/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider } from "react-hook-form"
import { TicketSchema } from "@/schemas/ticket.schema"
import { z } from "zod"

const ConfirmTicketForm = ({ id }: { id: string }) => {
  const isAuthenticated = useStore(useAuthStore, (state) => state.isAuthenticated);
  const { name } = useStore(useAuthStore, (state) => state.loggedInUser);

  const { toast } = useToast();
  const form = useForm<z.infer<typeof TicketSchema>>({
    resolver: zodResolver(TicketSchema),
    defaultValues: {
      contactName: name,
      contactNumber: "",
      eventId: id,
    }
  })

  if(!isAuthenticated) {
    return <LoginRequired />
  }


  const onSubmit = async (values: z.infer<typeof TicketSchema>) => {
    console.log(values)
    // try {
    //   const response = await axios.post(BackendAPI + "/api/auth/signup", values);
    //   toast({
    //     title: "Account Created",
    //     description: response.data.message,
    //   })
    //   router.push("/signin");
    // } catch (error) {
    //   returnAxiosError(error);
    // }
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="contactName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Names</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contactNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Your phone number" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="eventId"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="hidden" readOnly {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="mt-4 w-full dark:text-white" type="submit">Confirm</Button>
      </form>
    </FormProvider>
  )
};

export default ConfirmTicketForm;
