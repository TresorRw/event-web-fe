"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl } from "../form"
import { Input } from "../input"
import { Button } from "../button"
import { SigninSchema } from "@/schemas/user.schema";
import { z } from "zod"
import { BackendAPI } from "@/lib/constants"
import { returnAxiosError } from "@/lib/Error"
import { useRouter } from "next/navigation"
import axios from "axios"
import { toast } from "../use-toast"
import { useAuthStore } from "@/app/store/auth.store"

const SignInForm = () => {
  const saveUserData = useAuthStore(state => state.saveUserData);

  const router = useRouter();
  const form = useForm<z.infer<typeof SigninSchema>>({
    resolver: zodResolver(SigninSchema),
  })

  const onSubmit = async (values: z.infer<typeof SigninSchema>) => {
    try {
      const response = await axios.post(BackendAPI + "/api/auth/signin", values);
      toast({
        title: response.data.message,
      })
      localStorage.setItem("userData", JSON.stringify(response.data));
      saveUserData(response.data.token, { name: response.data.data.name, role: response.data.data.role });
      router.push('/in/profile');
    } catch (error) {
      returnAxiosError(error);
    }
  }

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
        <Button className="mt-4 w-full dark:text-white" type="submit">Submit</Button>
      </form>
    </FormProvider>
  )
}

export default SignInForm

