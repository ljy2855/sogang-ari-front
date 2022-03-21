import { useSelector } from "react-redux";
import { RootState } from "../redux/modules/reducer";

export default function useStudentId() {
  const studentId = useSelector<RootState, string | null>(
    (state) => state.auth.studentId
  );

  return studentId;
}
