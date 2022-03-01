import { RouterState } from "connected-react-router";
import { AnyAction, Reducer } from "redux";

export interface ClubDetailType {
  id: number;
  download_count: number;
  like_count: number;
  runtime: number;
  title: string;
  year: number;
  rating: number;
  large_cover_image: string;
  description_full: string;
  genres: string[];
}

export interface ClubType {
  id: number;
  title: string;
  year: number;
  rating: number;
  medium_cover_image: string;
  summary: string;
  genres: string[];
}

export type LoginReqType = {
  studentId: string;
  password: string;
};

export interface AuthState {
  token: string | null;
  loading: boolean;
  error: Error | null;
}

export interface RootState {
  auth: AuthState;
  router: Reducer<RouterState<unknown>, AnyAction>;
}
