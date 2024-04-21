import { Button } from "./button";

const SubmitButton = ({
  text,
  loading,
  loadingText,
}: {
  text: string;
  loading: boolean;
  loadingText: string;
}) => {
  return (
    <Button
      className="mt-4 w-full dark:text-white"
      type="submit"
      disabled={loading}
      aria-disabled={loading}
    >
      {loading ? loadingText : text}
    </Button>
  );
};

export default SubmitButton;
