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

export interface User {
  createdAt: string;
  email: string;
  name: string;
  updatedAt: string;

  _id: string;
}
export interface UserContextType {
  user: User; // Replace 'any' with a more specific later
  isLoading: boolean;
  isError: boolean;
  handleLogout: () => void;
}
