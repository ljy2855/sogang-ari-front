import axios from "axios";
import { SignUpReqType } from "../types";

const SIGNUP_API_URL = "api/sign-up";

export default class SignUpService {
  public static async signUp(reqData: SignUpReqType): Promise<string> {
    let response = "";
    await axios
      .post(`${process.env.REACT_APP_URL}/${SIGNUP_API_URL}`, reqData)
      .then((res) => {
        response = res.data.result;
      })
      .catch((error) => {
        response = error.response;
        console.log("error:", response);
      });
    console.log("signup:", response);
    return response;
  }
}
