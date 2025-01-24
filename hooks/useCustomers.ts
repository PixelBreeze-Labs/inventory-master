// hooks/useCustomers.ts
import { useState, useEffect, useCallback } from "react";
import { customersEndpoints } from "@/services/customers.api";
import api from "@/services/ api";

export interface CustomersResponse {
    message: string;
    customers: customer[];
    pagination: {
      total: number;
      offset: number;
      limit: number;
      has_more: boolean;
      next_offset: number;
    }
}

export interface customer {
    id: number;
    name: string;
    user_id: number;
    email: string;
    loyalty_level: string;
}

export interface customerDetails {
    id: number;
    name: string;
    user_id: number;
    email: string;
    loyalty_level: string;
    feedback: feedback[];
}

export interface feedback {
  id: number
  visit_date: string
  overall_satisfaction: number
  product_quality: number
  staff_knowledge: number
  staff_friendliness: number
  store_cleanliness: number
  value_for_money: number
  found_desired_product: boolean
  product_feedback: string
  service_feedback: string
  improvement_suggestions: string
  would_recommend: boolean
  purchase_made: string
  purchase_amount: number
  store: any
}

const useCustomers = () => {
  const [customersList, setCustomersList] =
    useState<CustomersResponse | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [customerDetails, setCustomerDetails] = useState<customerDetails | null>(null);
    const [isLoadingDetails, setIsLoadingDetails] = useState(false);
    const [errorDetails, setErrorDetails] = useState<string | null>(null);

  const fetchCustomerList = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await api<CustomersResponse>({
        ...customersEndpoints.getCustomerList
      });
      setCustomersList(response);
    } catch (err: any) {
      setError(err.message || "Failed to fetch customer list");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchCustomerDetails = useCallback(async (id: number) => {
    try {
      setIsLoadingDetails(true);
      setErrorDetails(null);

      const response = await api<customerDetails>({
        ...customersEndpoints.getCustomerDetails,
        path: customersEndpoints.getCustomerDetails.path(id)
      });
      setCustomerDetails(response);
      return response;  
    } catch (err: any) {
      setErrorDetails(err.message || "Failed to fetch customer details");
    } finally {
      setIsLoadingDetails(false);
    }
  }, []);

  const refresh = useCallback(() => {
    return fetchCustomerList();
  }, [fetchCustomerList]);


  useEffect(() => {
    fetchCustomerList();
  }, [fetchCustomerList]);

  return {
    customersList,
    isLoading,
    error,
    refresh,

    fetchCustomerDetails, 
    customerDetails,
    isLoadingDetails,
    errorDetails
  };
};

export default useCustomers;
