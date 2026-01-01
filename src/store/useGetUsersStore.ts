import { create } from "zustand";

import type { UsersProps } from "../types";
import { getAllUsers } from "../Api/user-api";

interface getAllUsersProps {
  users: UsersProps[];
  fetchGetAllUsers: () => Promise<void>;
  loading: boolean;
  errors: boolean;
}

export const useGetUsersStore = create<getAllUsersProps>((set) => ({
  users: [],
  loading: false,
  errors: false,
  fetchGetAllUsers: async () => {
    set({ users: [], loading: true });
    try {
      const res = await getAllUsers();

      set({ users: res, loading: false, errors: false });
    } catch (error) {
      console.log("Error al obtener usuarios", error);
      set({ users: [], loading: false, errors: true });
    }
  },
}));
