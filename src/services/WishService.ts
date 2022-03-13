import axios from "axios";

import { WishResType } from "../types";

const WISH_API_URL = "api/user";
const USER_API_URL = "http://13.125.248.38:8080";

export default class WishService {
  public static async getWishs(
    token: string,
    studentId: string
  ): Promise<WishResType[]> {
    const response = await axios.get<WishResType[]>(
      `${USER_API_URL}/${WISH_API_URL}/${studentId}/wish`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }

  public static async addWish(
    token: string,
    studentId: string,
    clubId: string
  ): Promise<WishResType> {
    const response = await axios.post<WishResType>(
      `${USER_API_URL}/${WISH_API_URL}/${studentId}/wish/${clubId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }

  public static async deleteWish(
    token: string,
    studentId: string,
    clubId: string
  ): Promise<void> {
    await axios.delete(
      `${USER_API_URL}/${WISH_API_URL}/${studentId}/wish/${clubId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
}
