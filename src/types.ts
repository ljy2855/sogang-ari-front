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
