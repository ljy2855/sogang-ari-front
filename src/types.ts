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
