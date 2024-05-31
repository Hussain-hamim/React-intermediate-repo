interface ActionLogin {
  type: "login";
  username: string;
}
interface ActionLogout {
  type: "logout";
}

type AuthAction = ActionLogin | ActionLogout;

const authReducer = (state: string, action: AuthAction): string => {
  if (action.type === "login") return action.username;
  if (action.type === "logout") return "";
  return state;
};
export default authReducer;
