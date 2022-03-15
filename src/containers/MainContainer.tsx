import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  login as loginSaga,
  logout as logoutSaga,
} from "../redux/modules/auth";
import { RootState } from "../redux/modules/reducer";
import { LoginReqType, WishResType } from "../types";
import {
  getWishs as getWishsSaga,
  addWish as addWishSaga,
  deleteWish as deleteWishSaga,
} from "../redux/modules/wish";

import Main from "../components/Main";

const MainContainer: React.FC = (props) => {
  const clubs = useSelector<RootState, WishResType[] | null>(
    (state) => state.wish.clubs
  );
  const wish_loading = useSelector<RootState, boolean>(
    (state) => state.wish.loading
  );
  const wish_error = useSelector<RootState, Error | null>(
    (state) => state.wish.error
  );
  const auth_loading = useSelector<RootState, boolean>(
    (state) => state.auth.loading
  );
  const auth_error = useSelector<RootState, Error | null>(
    (state) => state.auth.error
  );
  const dispatch = useDispatch();

  const getWishs = useCallback(() => {
    dispatch(getWishsSaga());
  }, [dispatch]);

  const addWish = useCallback(
    (clubId: string) => {
      dispatch(addWishSaga(clubId));
    },
    [dispatch]
  );

  const deleteWish = useCallback(
    (clubId: string) => {
      dispatch(deleteWishSaga(clubId));
    },
    [dispatch]
  );

  const logout = useCallback(() => {
    dispatch(logoutSaga());
  }, [dispatch]);

  const login = useCallback(
    ({ studentId, password }: LoginReqType) => {
      dispatch(loginSaga({ studentId, password }));
    },
    [dispatch]
  );

  return (
    <Main
      {...props}
      wishs={clubs}
      wish_error={wish_error}
      wish_loading={wish_loading}
      auth_error={auth_error}
      auth_loading={auth_loading}
      getWishs={getWishs}
      deleteWish={deleteWish}
      addWish={addWish}
      logout={logout}
      login={login}
    />
  );
};

export default MainContainer;
