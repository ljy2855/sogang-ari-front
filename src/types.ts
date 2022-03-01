import { RouterState } from "connected-react-router";
import { AnyAction, Reducer } from "redux";

export interface ClubDetailType {
  id: number;
  download: number;
  like: number;
  runtime: number;
  title: string;
  year: number;
  rating: number;
  coverImg: string;
  summary: string;
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
  email: string;
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
