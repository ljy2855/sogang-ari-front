import axios from "axios";

import { WishResType } from "../types";

const WISH_API_URL = "api/user";

export default class WishService {
  public static async getWishs(
    token: string,
    studentId: string
  ): Promise<WishResType[]> {
    const response = await axios.get<WishResType[]>(
      `${process.env.REACT_APP_URL}/${WISH_API_URL}/${studentId}/wish`,
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
      `${process.env.REACT_APP_URL}/${WISH_API_URL}/${studentId}/wish/${clubId}`,
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
      `${process.env.REACT_APP_URL}/${WISH_API_URL}/${studentId}/wish/${clubId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
}
