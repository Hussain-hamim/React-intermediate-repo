import { Navigate, Outlet } from "react-router-dom";
import UserList from "./UserList";
import useAuth from "./useAuth";

const UserPage = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;

  return (
    <div className="row">
      <div className="col">
        <UserList />
      </div>
      <div className="col">
        <Outlet />
      </div>
    </div>
  );
};

export default UserPage;
