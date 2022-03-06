import { RootState } from "./modules/reducer";

export function getAccessTokenFromState(state: RootState): string | null {
  return state.auth.accessToken;
}

export function getRefreshTokenFromState(state: RootState): string | null {
  return state.auth.refreshToken;
}
