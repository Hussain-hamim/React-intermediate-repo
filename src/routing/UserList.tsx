import { Link } from "react-router-dom";

const UserList = () => {
  const users = [
    { id: 1, name: "Hussain" },
    { id: 2, name: "Haroon" },
    { id: 3, name: "Hamza" },
    { id: 4, name: "Hamim" },
    { id: 5, name: "Hawa" },
    { id: 6, name: "Sohaib" },
  ];

  return (
    <>
      <ul className="list-group">
        {users.map((user) => (
          <li className="list-group-item" key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
