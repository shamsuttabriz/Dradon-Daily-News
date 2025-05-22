import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Observer
  useEffect(() => {
    const unubscriber = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unubscriber();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
  };

  console.log(user)

  return <AuthContext value={authData}>{children}</AuthContext>;
}

export default AuthProvider;
