import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firbase/firbase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);

//   create user 
  const CreateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
//   sin in 
const login=(email,password)=>{
   return signInWithEmailAndPassword(auth,email,password)
}
// logout or sign out 
  const Logout = () => {
    return signOut(auth);
  };
//   on auth state 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const Authinfo = { CreateUser, user, setUser,login, Logout};
  return (
    <AuthContext.Provider value={Authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
