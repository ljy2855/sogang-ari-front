import { useSelector } from "react-redux";
import { RootState } from "../redux/modules/reducer";
import { WishResType } from "../types";

export default function useWishs() {
  const wishs = useSelector<RootState, WishResType[] | null>(
    (state) => state.wishs.clubs
  );

  return wishs;
}
