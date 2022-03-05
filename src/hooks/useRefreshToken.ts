import { useSelector } from "react-redux";

import { RootState } from "../redux/modules/reducer";

export default function useRefresgToken() {
  const token = useSelector<RootState, string | null>(
    (state) => state.auth.refreshToken
  );

  return token;
}
