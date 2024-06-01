import { Dispatch, createContext } from "react";
import { AuthAction } from "../reducers/authReducer";

interface authContextType {
  user: string;
  authDispatch: Dispatch<AuthAction>;
}

const AuthContext = createContext<authContextType>({} as authContextType);

export default AuthContext;
