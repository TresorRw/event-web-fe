import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import dynamic from "next/dynamic";
const SignInForm = dynamic(() => import("@/components/ui/forms/signin"), {
  ssr: false,
});
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign into your account",
  description: "Search, Explore, and Attend Exciting Gatherings Near You!",
};

const SignIn = () => {
  return (
    <div className="bg-gray-50 p-4 flex justify-center dark:bg-inherit w-full">
      <Card className="md:w-1/2 lg:w-1/3 w-full">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome at TresEvents</CardTitle>
          <CardDescription>Elevate Your Event Experience</CardDescription>
          <Separator />
        </CardHeader>
        <CardContent>
          <SignInForm />
        </CardContent>
        <CardFooter>
          <p>
            No account yet?{" "}
            <Link className="text-primary" href={"/signup"}>
              Create one here
            </Link>{" "}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignIn;
