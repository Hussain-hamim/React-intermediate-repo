import useAuth from "./hooks/useAuth";

const LoginStatus = () => {
  const { user, dispatch } = useAuth();
  if (user)
    return (
      <>
        <div>
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
