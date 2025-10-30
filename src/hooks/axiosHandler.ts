"use client";

import axios from "axios";
import { toast } from "sonner";

const useAxiosErrorHandler = () => {
  const handleError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // Server responded with a status code outside 2xx
        if (error.response.status === 400) {
          toast.error(
            typeof error.response.data === "string"
              ? error.response.data
              : error.response.data.message || error.response.data.error  || "Bad Request"
          );
        } else {
          toast.error(
            error.response.data?.message ||
              error.response.data?.error || "An unexpected error occurred"
          );
        }
      } else if (error.request) {
        // No response from server
        toast.error("No response received from the server");
      } else {
        // Request setup error
        toast.error(`Request error: ${error.message}`);
      }
    } else {
      // Non-Axios error
      toast.error(`Unknown error: ${String(error)}`);
    }
  };

  return { handleError };
};

export default useAxiosErrorHandler;
