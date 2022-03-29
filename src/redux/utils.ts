import { WishResType } from "../types";
import { RootState } from "./modules/reducer";

export function getAccessTokenFromState(state: RootState): string | null {
  return state.auth.accessToken;
}

export function getRefreshTokenFromState(state: RootState): string | null {
  return state.auth.refreshToken;
}

export function getUserIdFromState(state: RootState): string | null {
  return state.auth.userId;
}

export function getClubsFromState(state: RootState): WishResType[] | null {
  return state.wishs.clubs;
}
