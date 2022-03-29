import { useSelector } from "react-redux";
import { RootState } from "../redux/modules/reducer";

export default function useUserId() {
  const userId = useSelector<RootState, string | null>(
    (state) => state.auth.userId
  );

  return userId;
}
