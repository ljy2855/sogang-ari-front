import { WishResType } from "../types";
import { RootState } from "./modules/reducer";

export function getAccessTokenFromState(state: RootState): string | null {
  return state.auth.accessToken;
}

export function getRefreshTokenFromState(state: RootState): string | null {
  return state.auth.refreshToken;
}

export function getStudentIdFromState(state: RootState): string | null {
  return state.auth.studentId;
}

export function getClubsFromState(state: RootState): WishResType[] | null {
  return state.wish.clubs;
}
