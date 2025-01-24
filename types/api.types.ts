export interface ApiRequest {
    path: string | ((payload: any) => string);
    method: string;
    content_type: string;
    has_token: boolean;
    is_admin?: boolean;
    query?: string;
}

export interface ApiResponse<T = any> {
    data: T;
    status: number;
    message?: string;
}