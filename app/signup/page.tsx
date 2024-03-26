import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const SignUp = () => {
  return (
    <div className="bg-gray-50 p-4 flex justify-center dark:bg-inherit w-full">
      <Card className="md:w-1/2 lg:w-1/3 w-full mt-32">
        <CardHeader>
          <CardTitle className="text-2xl">Create your account at TresEvents</CardTitle>
          <CardDescription>Elevate Your Event Experience</CardDescription>
          <Separator />
        </CardHeader>
        <CardContent>
          {"SIGN UP FORM WILL BE PLACED HERE"}
        </CardContent>
        <CardFooter>
          {"OTHER CONTENT GOES HERE"}
        </CardFooter>
      </Card>

    </div>
  )
}

export default SignUp