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

export interface ClubResType {
  id: number;
  name: string;
  introduction: string;
  detail: string;
  url: string;
  section: string;
  recruiting: boolean;
}

export interface LoginReqType {
  studentId: string;
  password: string;
}

export interface LoginResType {
  accessToken: string;
  refreshToken: string;
}

export interface WishResType {
  id: number;
  name: string;
  section: string;
  recruiting: boolean;
}
