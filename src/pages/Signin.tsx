import React from "react";
import { Redirect } from "react-router-dom";
import SigninContainer from "../containers/SiginContainer";
import useToken from "../hooks/useAccessToken";

export default function Signin() {
  const token = useToken();

  if (token !== null) {
    return <Redirect to="/" />;
  }

  return <SigninContainer />;
}
