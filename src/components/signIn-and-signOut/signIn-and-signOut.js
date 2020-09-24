import React from "react";
import SignIN from "../sign-in/sign-in";
import SignUP from "../sign-up/signUP";
import "./signIn-and-signOut.scss";
const SignInandSignOut = () => {
  return (
    <div className="SignInandSignOut">
      <SignIN />
      <SignUP />
    </div>
  );
};

export default SignInandSignOut;
