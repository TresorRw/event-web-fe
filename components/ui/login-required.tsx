import { Alert, AlertDescription } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const LoginRequired = () => {
  return (
    <Alert variant="destructive">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertDescription>
        You need to be logged in to book a ticket. Please sign in or register.
      </AlertDescription>
    </Alert>
  );
};

export default LoginRequired;
