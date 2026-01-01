import axios from "axios";
import type { UsersProps } from "../types";

export const getAllUsers = async (): Promise<UsersProps[]> => {
  const url = "https://jsonplaceholder.typicode.com/users";

  try {
    const response = await axios.get<UsersProps[]>(url);

    return response.data;
  } catch (error) {
    console.log("Error de conexion", error);
    return [];
  }
};
