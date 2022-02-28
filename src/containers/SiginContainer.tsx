import React from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import Signin from "../components/Signin";
import { login as loginSaga } from "../redux/modules/auth";

export default function SigninContainer() {
  const dispatch = useDispatch();
  const login = useCallback(
    (reqData) => {
      dispatch(loginSaga(reqData));
    },
    [dispatch]
  );
  return <Signin login={login} />;
}
