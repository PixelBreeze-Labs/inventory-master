// services/notification.api.ts
export const customersEndpoints = {
    getCustomerList: {
        path: () => `/vb-apps/customers`,
        method: 'GET',
        content_type: 'application/json',
        has_token: true
    },
    getCustomerDetails: {
        path: (id: number) => `/vb-apps/customers/${id}`,
        method: 'GET',
        content_type: 'application/json',
        has_token: true
    }
};