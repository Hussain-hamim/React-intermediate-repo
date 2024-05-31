import { useReducer, useState } from "react";
import authReducer from "./reducers/authReducer";

const LoginStatus = () => {
  // const [user, setUser] = useState('');
  const [user, dispatch] = useReducer(authReducer, "");

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "logout" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: "login", username: "hussain hamim" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
