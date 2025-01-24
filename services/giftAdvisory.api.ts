// services/notification.api.ts
export const giftAdvisoryEndpoints = {
    getGiftSuggestions: {
        path: (occasion: string, budget: number, store_id: number ) => `/vb-apps/products/gift-suggestions?occasion=${occasion}&budget=${budget}&store_id=${store_id}`,
        method: 'GET',
        content_type: 'application/json',
        has_token: true
    },
};