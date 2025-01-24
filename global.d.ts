declare module '@services/api' {
    export function login(username: string, password: string): Promise<string>;
    // Add other exported functions from api.ts here
}