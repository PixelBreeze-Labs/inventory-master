// hooks/useCustomers.ts
import { useState, useCallback } from "react";
import api from "@/services/ api";
import { customerFeedbackEndpoints } from "@/services/customerFeedback.api";
import OverlayController from "@/components/OverlayController";
import { router } from "expo-router";

export interface CustomersFeedbackResponse {
   
}

const useCustomerFeedback = () => {
  const [response, setReponse] =
    useState<CustomersFeedbackResponse | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitCustomerFeedback = useCallback(async (payload: any) => {
    OverlayController.show();
    try {
      setIsLoading(true);
      setError(null);

      const response = await api<CustomersFeedbackResponse>({
        ...customerFeedbackEndpoints.submitCustomerFeedback,
        path: customerFeedbackEndpoints.submitCustomerFeedback.path(payload.customer_id)
      }, payload);

      setReponse(response);
      alert("Feedback submitted successfully");
      router.back();
    } catch (err: any) {
      alert(err.message || "Failed to submit feedback customer");
    } finally {
      OverlayController.hide();
      setIsLoading(false);
    }
  }, []);

  return {
    response,
    isLoading,
    error,
    submitCustomerFeedback
  };
};

export default useCustomerFeedback;