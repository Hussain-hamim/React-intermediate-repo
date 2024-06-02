import useAuthStore from "./store";

const LoginStatus = () => {
  // const { user, dispatch } = useAuth();
  const { user, login, logout } = useAuthStore(); // Zustand

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a className="btn btn-primary" onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        className="btn btn-primary"
        onClick={() => login("Hussain.Hamim")}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
