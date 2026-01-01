import { Activity, useEffect } from "react";
import { useGetUsersStore } from "./store/useGetUsersStore";
import Spinner from "./components/Spinner";
import Swal from "sweetalert2";
import Card from "./components/Card";

function App() {
  const { users, fetchGetAllUsers, loading, errors, errorMessage } =
    useGetUsersStore();

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
    <>
      <header className="flex flex-col items-center gap-5">
        <h1 className="text-center text-5xl font-bold mt-10">Lista Usuarios</h1>
        <Activity mode={users.length > 0 ? "hidden" : "visible"}>
          <button
            className="bg-indigo-500 p-4 rounded-lg"
            onClick={fetchGetAllUsers}
          >
            Consultar Usuarios
          </button>
        </Activity>
      </header>

      {loading && <Spinner />}

      <div className="p-8 mt-10">
        {users.length > 0 && <Card users={users} />}
      </div>
    </>
  );
}

export default App;
