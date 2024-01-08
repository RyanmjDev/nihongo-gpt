export interface UserState {
  token: string;
  name: string;
  email: string;
}


export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

export interface ChatMessage {
    message: string;
    isUser: boolean;
    messageId: string;
  }
  
