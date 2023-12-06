export interface User {
  id: string;
  username: string;
}


export interface LoginCredentials {
  email: string;
  password: string;
}

export interface ChatMessage {
    message: string;
    isUser: boolean;
  }
  
