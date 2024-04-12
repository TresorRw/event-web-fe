import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function ErrorAlert({
  title,
  message,
  variant,
}: {
  title: string;
  message: string;
  variant: "default" | "destructive" | null | undefined;
}) {
  return (
    <Alert variant={variant} className="w-full md:w-1/2 lg:w-1/3">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}

export default ErrorAlert;
