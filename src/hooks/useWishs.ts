import { useSelector } from "react-redux";

import { RootState } from "../redux/modules/reducer";
import { WishResType } from "../types";

export default function useStudentId() {
  const studentId = useSelector<RootState, WishResType[] | null>(
    (state) => state.wish.clubs
  );

  return studentId;
}
