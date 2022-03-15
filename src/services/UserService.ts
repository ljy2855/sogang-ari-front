import axios from "axios";
import { LoginReqType, LoginResType } from "../types";

const USER_LOGIN_API_URL = "api/login";
const USER_LOGOUT_API_URL = "api/logout";

export default class UserService {
  public static async login(reqData: LoginReqType): Promise<LoginResType> {
    const response = await axios.post(
      `${process.env.REACT_APP_URL}/${USER_LOGIN_API_URL}`,
      reqData
    );
    const { accessToken, refreshToken } = response.data.data.tokenInfo;
    return { accessToken, refreshToken };
  }
  public static async logout(reqData: LoginResType): Promise<void> {
    await axios.post(
      `${process.env.REACT_APP_URL}/${USER_LOGOUT_API_URL}`,
      reqData
    );
  }
}
