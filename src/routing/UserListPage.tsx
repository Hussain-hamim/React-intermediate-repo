const UserListPage = () => {
  const users = [
    { id: 1, name: "Hussain" },
    { id: 2, name: "Haroon" },
    { id: 3, name: "Hamza" },
  ];

  return (
    <ul className="list-group">
      {users.map((user) => (
        <li className="list-group-item" key={user.id}>
          <a href="#">{user.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default UserListPage;
