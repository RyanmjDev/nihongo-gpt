export interface UserState {
  name: string;
  email: string;
}


export interface LoginCredentials {
  email: string;
  password: string;
}

export interface ChatMessage {
    message: string;
    isUser: boolean;
  }
  
