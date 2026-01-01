import { Activity, useEffect } from "react";
import { useDarkMode, useGetUsersStore } from "./store/useGetUsersStore";
import Spinner from "./components/Spinner";
import Swal from "sweetalert2";
import Card from "./components/Card";
import ToggleMode from "./darkMode/ToggleMode";

function App() {
  const { users, fetchGetAllUsers, loading, errors, errorMessage } =
    useGetUsersStore();

  const isDark = useDarkMode((state) => state.isDark);

  useEffect(() => {
    if (errors && errorMessage) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
      });
    }
  }, [errors, errorMessage]);

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen transition-colors duration-500">
      <header className="flex justify-around items-center p-6 border-b border-gray-300 dark:border-gray-700">
        <h1 className="text-center text-5xl font-bold">Lista Usuarios</h1>

        <ToggleMode />
      </header>

      <Activity mode={users.length > 0 ? "hidden" : "visible"}>
        <div className="flex justify-center items-center h-dvh">
          <button
            className="bg-indigo-500 p-4 rounded-lg text-white cursor-pointer transition-colors duration-300 hover:bg-indigo-700"
            onClick={fetchGetAllUsers}
          >
            Consultar Usuarios
          </button>
        </div>
      </Activity>

      {loading && <Spinner isDark={isDark} />}

      <div className="p-8 mt-10">
        {users.length > 0 && <Card users={users} />}
      </div>
    </div>
  );
}

export default App;
