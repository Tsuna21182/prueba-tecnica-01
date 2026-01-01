import { create } from "zustand";

import type { UsersProps } from "../types";
import { getAllUsers } from "../Api/user-api";

interface getAllUsersProps {
  users: UsersProps[];
  fetchGetAllUsers: () => Promise<void>;
  loading: boolean;
  errors: boolean;
  errorMessage: string | null;
}

export const useGetUsersStore = create<getAllUsersProps>((set) => ({
  users: [],
  loading: false,
  errors: false,
  errorMessage: null,
  fetchGetAllUsers: async () => {
    set({ users: [], loading: true, errorMessage: null });
    try {
      const res = await getAllUsers();

      set({ users: res, loading: false, errors: false, errorMessage: null });
    } catch (error: unknown) {
      console.log("Error al obtener usuarios", error);
      set({
        users: [],
        loading: false,
        errors: true,
        errorMessage:
          error instanceof Error
            ? error.message
            : "No se pudo obtener la lista de usuarios",
      });
    }
  },
}));
