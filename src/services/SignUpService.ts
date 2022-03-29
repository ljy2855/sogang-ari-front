import axios from "axios";
import { SignUpReqType, SignUpResType } from "../types";

const SIGNUP_API_URL = "api/sign-up";

export default class SignUpService {
  public static async signUp(
    reqData: SignUpReqType
  ): Promise<SignUpResType | null> {
    let response: SignUpResType | null = null;
    await axios
      .post(`${process.env.REACT_APP_URL}/${SIGNUP_API_URL}`, reqData)
      .then((res) => {
        response = res.data;
      })
      .catch((error) => {
        response = error.response.data;
      });
    return response;
  }
}
