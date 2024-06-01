import LoginStatus from "./LoginStatus";
import { Task } from "./reducers/taskReducer";

interface Prop {
  count: number;
}

const NavBar = ({ count }: Prop) => {
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{count}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
