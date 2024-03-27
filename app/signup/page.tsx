import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import dynamic from 'next/dynamic'
const SignUpForm = dynamic(() => import("@/components/ui/forms/signup"), { ssr: false })
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

const SignUp = () => {
  return (
    <div className="bg-gray-50 p-4 flex justify-center dark:bg-inherit w-full">
      <Card className="md:w-1/2 lg:w-1/3 w-full">
        <CardHeader>
          <CardTitle className="text-2xl">Create your account at TresEvents</CardTitle>
          <CardDescription>Elevate Your Event Experience</CardDescription>
          <Separator />
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
        <CardFooter>
          <p>Already our member? <Link className="text-primary" href={"/signin"}>Login here</Link> </p>
        </CardFooter>
      </Card>

    </div>
  )
}

export default SignUp