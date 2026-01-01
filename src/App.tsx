import { Activity } from "react";
import { useGetUsersStore } from "./store/useGetUsersStore";
import Spinner from "./components/Spinner";

function App() {
  const users = useGetUsersStore((state) => state.users);
  const getUsers = useGetUsersStore((state) => state.fetchGetAllUsers);
  const loading = useGetUsersStore((state) => state.loading);

  return (
    <>
      <header className="flex flex-col items-center gap-5">
        <h1 className="text-center text-5xl font-bold mt-10">Lista Usuarios</h1>
        <Activity mode={users.length > 0 ? "hidden" : "visible"}>
          <button className="bg-indigo-500 p-4 rounded-lg" onClick={getUsers}>
            Consultar Usuarios
          </button>
        </Activity>
      </header>

      {loading && <Spinner />}
    </>
  );
}

export default App;
