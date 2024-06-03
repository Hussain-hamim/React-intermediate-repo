import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div id="main">
        {/* Outlet: like a placeholder for child comps */}
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
