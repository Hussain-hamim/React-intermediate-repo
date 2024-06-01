import { useContext, useReducer, useState } from "react";
import authReducer from "./reducers/authReducer";
import AuthContext from "./contexts/authContext";

const LoginStatus = () => {
  const { user, authDispatch } = useContext(AuthContext);
  if (user)
    return (
      <>
        <div>
          <h2>welcome </h2>
          <span className="mx-2">{user}</span>
          <hr />
          <a
            className="btn btn-primary"
            onClick={() => authDispatch({ type: "logout" })}
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
        onClick={() =>
          authDispatch({ type: "login", username: "hussain.hamim" })
        }
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
