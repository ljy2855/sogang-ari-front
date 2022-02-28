import axios from "axios";
import { LoginReqType } from "../types";

const USER_API_URL = "http://3.35.139.164:8080/api/user/login";

export default class UserService {
  public static async login(reqData: LoginReqType): Promise<string> {
    const response = await axios.post(USER_API_URL, reqData);
    console.log(response);
    return response.data.token;
  }
  public static async logout(token: string): Promise<void> {
    await axios.delete(USER_API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}
