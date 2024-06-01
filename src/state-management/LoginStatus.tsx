import { useReducer, useState } from "react";
import authReducer from "./reducers/authReducer";

const LoginStatus = () => {
  // const [user, setUser] = useState('');
  const [user, dispatch] = useReducer(authReducer, "");

  if (user)
    return (
      <>
        <div
          style={{ height: "200px", width: "100%", backgroundColor: "pink" }}
        >
          <h2>welcome </h2>
          <span className="mx-2">{user}</span>
          <hr />
          <a
            className="btn btn-primary"
            onClick={() => dispatch({ type: "logout" })}
            href="#"
          >
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        className="btn btn-primary"
        onClick={() => dispatch({ type: "login", username: "hussain.hamim" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
