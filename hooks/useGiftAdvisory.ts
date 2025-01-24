// hooks/useGiftAdvisory.ts
import { useState, useEffect, useCallback } from "react";
import api from "@/services/ api";
import { giftAdvisoryEndpoints } from "@/services/giftAdvisory.api";

export interface giftSuggestions {
  suggestions: any[],
  total: number
}

export interface suggestions {
  id: number;
  name: string;
  brand: string,
  price:number,
  description: string,
  image_path: string
}

const useGiftAdvisory = () => {
  const [giftSuggetions, setGiftSuggetions] = useState<giftSuggestions | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  type payloadProps = {
    occasion: string
    budget: number
    store_id: number
  }
  const fetchSuggestedList = useCallback(async (payload:payloadProps) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await api<giftSuggestions>({
        ...giftAdvisoryEndpoints.getGiftSuggestions,
        path: giftAdvisoryEndpoints.getGiftSuggestions.path(payload.occasion, payload.budget, payload.store_id),
      });
      setGiftSuggetions(response);
      return response
    } catch (err: any) {
      setError(err.message || "Failed to fetch suggested list");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // const refresh = useCallback(() => {
  //   return fetchSuggestedList();
  // }, [fetchSuggestedList]);

  // useEffect(() => {
  //   fetchSuggestedList();
  // }, [fetchSuggestedList]);

  return {
    giftSuggetions,
    fetchSuggestedList,
    isLoading,
    error,
    // refresh,
  };
};

export default useGiftAdvisory;
