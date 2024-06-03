import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import UserList from "./UserList";

const UserPage = () => {
  return (
    <>
      <NavBar />
      <div className="row">
        <div className="col">
          <UserList />
        </div>
        <div className="col">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UserPage;
