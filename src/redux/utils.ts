import { AuthState } from "./modules/auth";
import { RootState } from "./modules/reducer";

export function getTokenFromState(state: RootState): AuthState | null {
  return state.auth;
}

export function getAccessTokenFromState(state: RootState): string | null {
  return state.auth.accessToken;
}

export function getRefreshTokenFromState(state: RootState): string | null {
  return state.auth.refreshToken;
}
