import React from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Signin from "../components/Signin";
import { login as loginSaga } from "../redux/modules/auth";
import { RootState } from "../redux/modules/reducer";
import { LoginReqType } from "../types";

const SigninContainer: React.FC = () => {
  const loading = useSelector<RootState, boolean>(
    (state) => state.auth.loading
  );
  const error = useSelector<RootState, Error | null>(
    (state) => state.auth.error
  );
  const dispatch = useDispatch();

  const login = useCallback(
    ({ studentId, password }: LoginReqType) => {
      dispatch(loginSaga({ studentId, password }));
    },
    [dispatch]
  );

  return <Signin loading={loading} error={error} login={login} />;
};

export default SigninContainer;
