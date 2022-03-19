import { useSelector } from "react-redux";
import { RootState } from "../redux/modules/reducer";

export default function useRefreshToken() {
  const token = useSelector<RootState, string | null>(
    (state) => state.auth.refreshToken
  );

  return token;
}
