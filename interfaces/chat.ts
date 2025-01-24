export type Chat = {
    id: number;
    name: string;
    message: string;
    time: string;
    avatar?: any;
    unread?: number;
    isOnline: boolean;
};

export interface SingleChatProps {
    chat: Chat;
}

export interface Message {
    id: string;
    content: string;
    sender: "user" | "other";
    timestamp: string;
    senderName: string;
    avatar?: any;
    reply?: string;
}