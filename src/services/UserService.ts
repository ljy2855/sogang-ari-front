import axios from "axios";
import { LoginReqType, TokenType } from "../types";

// const USER_API_URL = "https://api.marktube.tv/v1/me";
const USER_LOGIN_API_URL = "api/login";
const USER_LOGOUT_API_URL = "api/logout";

export default class UserService {
  public static async login(reqData: LoginReqType): Promise<TokenType> {
    const response = await axios.post(USER_LOGIN_API_URL, reqData);
    console.log("login resposns!!!!!", response);
    const { accessToken, refreshToken } = response.data.data;
    return { accessToken, refreshToken };
  }
  public static async logout(reqData: TokenType): Promise<void> {
    console.log("logout reqData!!!!!", reqData);
    await axios.post(USER_LOGOUT_API_URL, reqData);
  }
}
