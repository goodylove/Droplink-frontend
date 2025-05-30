import { LoginInterface, RegisterInterface } from "@/types/interface";
import API from "./aixosInstance";
import { toast } from "react-toastify";

export async function RegisterUser(userObject: RegisterInterface) {
  try {
    const response = await API.post("/auth/register", userObject);
    const data = response?.data;

    return data;
  } catch (error) {
    if (error instanceof Error) {
      return toast.error(error.message);
    }
    return toast.error("An error occurred while registering the user.");
  }
}

export async function LoginUser(userObject: LoginInterface) {
  try {
    const response = await API.post("/auth/login", userObject);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error registering user:", error);
  }
}

export async function getCurrentUser() {
  try {
    const response = await API.get("/artist/current-user");
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error registering user:", error);
  }
}
