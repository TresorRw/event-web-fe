import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

function ErrorAlert() {
  return (
    <Alert variant="default">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Something went wrong! Refresh the page to try again.
      </AlertDescription>
    </Alert>
  )
}

export default ErrorAlert