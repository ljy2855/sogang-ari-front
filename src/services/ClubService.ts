import axios from "axios";
import { ClubResType } from "../types";

const CLUB_API_URL = "api/club/info";

export default class ClubService {
  public static async getClubs(token: string): Promise<ClubResType[]> {
    const response = await axios.get<ClubResType[]>(CLUB_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
}
