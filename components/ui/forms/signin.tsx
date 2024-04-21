"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl } from "../form";
import { Input } from "../input";
import { SigninSchema } from "@/schemas/user.schema";
import { z } from "zod";
import { returnAxiosError } from "@/lib/Error";
import { useRouter } from "next/navigation";
import { toast } from "../use-toast";
import { useAuthStore } from "@/app/store/auth.store";
import { AxiosClient } from "@/lib";
import { useState } from "react";
import SubmitButton from "../submit-button";

const SignInForm = () => {
  const [loading, setLoading] = useState(false);
  const saveUserData = useAuthStore((state) => state.saveUserData);

  const router = useRouter();
  const form = useForm<z.infer<typeof SigninSchema>>({
    resolver: zodResolver(SigninSchema),
  });

  const onSubmit = async (values: z.infer<typeof SigninSchema>) => {
    setLoading(true);
    try {
      const response = await AxiosClient.post("/auth/signin", values);
      toast({
        title: response.data.message,
      });
      saveUserData(response.data.token, {
        name: response.data.data.name,
        role: response.data.data.role,
      });
      router.push("/profile");
    } catch (error) {
      returnAxiosError(error);
    }
    setLoading(false);
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
        <SubmitButton
          loading={loading}
          loadingText="Signing you in..."
          text="Sign in"
        />
      </form>
    </FormProvider>
  );
};

export default SignInForm;
