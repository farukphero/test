import { app } from "@/app/firebase/firebase.config";
import React from "react";
import { getAuth } from "firebase/auth";
const LoginPage = () => {
  const auth = getAuth(app);
  console.log(auth);
  return <div>login</div>;
};

export default LoginPage;
