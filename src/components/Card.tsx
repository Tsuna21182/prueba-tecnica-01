import type { UsersProps } from "../types";

type CardProps = {
  users: UsersProps[];
};

function Card({ users }: CardProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {users.map((user) => (
        <div
          className="bg-white dark:bg-gray-800 p-4 rounded-lg text-black dark:text-white shadow-md dark:shadow-blue-900 border border-gray-200 dark:border-gray-700 transition-colors duration-300"
          key={user.id}
        >
          <h4 className="font-bold">Nombre: {user.name}</h4>
          <p>
            <span className="font-bold">Email: </span>
            {user.email}
          </p>
          <p>
            <span className="font-bold">Ciudad: </span>
            {user.address.city}
          </p>
          <p>
            <span className="font-bold">Nombre de la empresa: </span>
            {user.company.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Card;
