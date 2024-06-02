import useAuth from "./useAuth";

const LoginStatus = () => {
  const { user, dispatch } = useAuth();
  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
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
