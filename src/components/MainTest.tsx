// Main 화면 test용

import React, { useEffect } from "react";
import { LoginReqType, WishResType } from "../types";
import useAccessToken from "../hooks/useAccessToken";

interface MainTestProps {
  wishs: WishResType[] | null;
  error: Error | null;
  loading: boolean;
  // getClubs: () => void;
  getWishs: () => void;
  deleteWish: (clubId: string) => void;
  addWish: (clubId: string) => void;
  logout: () => void;
  login: ({ studentId, password }: LoginReqType) => void;
}

const MainTest: React.FC<MainTestProps> = ({
  wishs,
  error,
  loading,
  getWishs,
  deleteWish,
  addWish,
  logout,
  login,
}) => {
  const token = useAccessToken();
  useEffect(() => {
    if (token) {
      getWishs();
    }
  }, [token, getWishs]);

  useEffect(() => {
    if (error) {
      logout();
    }
  }, [error, logout]);

  return <>{/* 작업공간 */}</>;
};

export default MainTest;
