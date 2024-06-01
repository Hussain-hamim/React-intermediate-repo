import { Dispatch, createContext } from "react";
import { AuthAction } from "../reducers/authReducer";

interface authContextType {
  user: string;
  dispatch: Dispatch<AuthAction>;
}

const AuthContext = createContext<authContextType>({} as authContextType);

export default AuthContext;
