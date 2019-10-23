import React, { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/AuthContext";

// NB: The AuthScreen doesnt render anything
// its only job is to check if we have a token stored

const AuthScreen = () => {
  const { tokenSignin } = useContext(AuthContext);
  useEffect(() => {
    tokenSignin();
  }, []);
  return null;
};

export default AuthScreen;
