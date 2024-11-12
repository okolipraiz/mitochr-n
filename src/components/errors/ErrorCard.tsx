import React from "react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface ErrorCardProps {
  error: string;
}

const ErrorCard: React.FC<ErrorCardProps> = ({ error }) => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle className="text-bold">Error</AlertTitle>
      <AlertDescription>
        {error === "Network Error"
          ? "Something went wrong with your internet connection"
          : error}
        <div className="my-3">
          <button
            type="button"
            className="py-3 px-4 bg-black text-white rounded-md"
            onClick={handleReload}
          >
            Please try again!
          </button>
        </div>
      </AlertDescription>
    </Alert>
  );
};

export default ErrorCard;
