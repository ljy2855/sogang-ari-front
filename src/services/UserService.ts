import axios from "axios";
import { LoginReqType } from "../types";

const USER_API_URL = "http://3.39.25.14:8080/api/login";

export default class UserService {
  public static async login(reqData: LoginReqType): Promise<string> {
    const response = await axios.post(USER_API_URL, reqData);
    console.log("resposns!!!!!", response);
    return response.data.token;
  }
  public static async logout(token: string): Promise<void> {
    await axios.delete(USER_API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}
