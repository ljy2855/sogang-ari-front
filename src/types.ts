export interface ClubResType {
  id: number;
  name: string;
  introduction: string;
  detail: string;
  url: string;
  section: string;
  location: string;
  recruiting: boolean;
  hashTags: string[];
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
  clubId: number;
  name: string;
  section: string;
  recruiting: boolean;
}
