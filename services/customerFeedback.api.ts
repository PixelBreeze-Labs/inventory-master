// services/notification.api.ts
export const customerFeedbackEndpoints = {
    submitCustomerFeedback: {
        path: (customerId:any) => `/vb-apps/customers/${customerId}/feedback`,
        method: 'POST',
        content_type: 'application/json',
        has_token: true
    },
};