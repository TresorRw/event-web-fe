"use client";

import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl } from "../form";
import { Input } from "../input";
import { Button } from "../button";
import { SignupSchema } from "@/schemas/user.schema";
import { z } from "zod";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { BackendAPI } from "@/lib/constants";
import { returnAxiosError } from "@/lib/Error";

const SignUpForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
  });

  const onSubmit = async (values: z.infer<typeof SignupSchema>) => {
    try {
      const response = await axios.post(
        BackendAPI + "/api/auth/signup",
        values,
      );
      toast({
        title: "Account Created",
        description: response.data.message,
      });
      router.push("/signin");
    } catch (error) {
      returnAxiosError(error);
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Your email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="displayName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Names</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What brings you here?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose from the list" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="organizer">
                    Plan and manage events
                  </SelectItem>
                  <SelectItem value="attendee">Buy tickets</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Your secret" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="mt-4 w-full dark:text-white" type="submit">
          Submit
        </Button>
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
