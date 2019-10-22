import React, { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/AuthContext";
const AuthScreen = () => {
  const { tokenSignin } = useContext(AuthContext);
  useEffect(() => {
    tokenSignin();
  }, []);
  return null;
};

export default AuthScreen;
