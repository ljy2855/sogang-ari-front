import { RootState } from "./modules/reducer";

export function getTokenFromState(state: RootState): string | null {
  return state.auth.token;
}
