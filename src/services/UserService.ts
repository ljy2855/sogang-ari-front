import axios from "axios";
import { LoginReqType, LoginResType } from "../types";

const USER_LOGIN_API_URL = "api/login";
const USER_LOGOUT_API_URL = "api/logout";

export default class UserService {
  public static async login(reqData: LoginReqType): Promise<LoginResType> {
    console.log("test", reqData);
    const response = await axios.post(USER_LOGIN_API_URL, reqData);
    console.log("response", response);
    const { accessToken, refreshToken } = response.data.data;
    return { accessToken, refreshToken };
  }
  public static async logout(reqData: LoginResType): Promise<void> {
    await axios.post(USER_LOGOUT_API_URL, reqData);
  }
}
