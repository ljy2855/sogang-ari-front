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

import MainTest from "../components/MainTest";
import Main from "../components/Main";

const MainContainer: React.FC = (props) => {
  const clubs = useSelector<RootState, WishResType[] | null>(
    (state) => state.wish.clubs
  );
  const loading = useSelector<RootState, boolean>(
    (state) => state.wish.loading
  );
  const error = useSelector<RootState, Error | null>(
    (state) => state.wish.error
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
  return <Main />;
  // return (
  //   <MainTest
  //     {...props}
  //     wishs={clubs}
  //     error={error}
  //     loading={loading}
  //     getWishs={getWishs}
  //     deleteWish={deleteWish}
  //     addWish={addWish}
  //     logout={logout}
  //     login={login}
  //   />
  // );
};

export default MainContainer;
