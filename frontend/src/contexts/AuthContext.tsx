import { createContext, ReactNode, useContext } from "react";

type SignInCredentials = {
  email: string;
  password: string;
};

interface AuthContextData {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  isAuthenticated: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const isAuthenticated = false;

  async function signIn({ email, password }: SignInCredentials) {
    //TODO: Logar
    console.log({ email, password });
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
