export interface RegisterInterface {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface LoginInterface {
  email: string;
  password: string;
}

export interface UserContextType {
  user: any; // Replace 'any' with a more specific later
  isLoading: boolean;
  isError: boolean;
}
