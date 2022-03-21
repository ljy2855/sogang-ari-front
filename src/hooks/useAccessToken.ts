import { useSelector } from "react-redux";
import { RootState } from "../redux/modules/reducer";

export default function useAccessToken() {
  const token = useSelector<RootState, string | null>(
    (state) => state.auth.accessToken
  );

  return token;
}
