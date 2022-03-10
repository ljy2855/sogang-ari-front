import axios from "axios";

import { WishResType } from "../types";

const GET_WISH_API_URL = "api/get-wish";
const ADD_WISH_API_URL = "api/add-wish";
const DELETE_WISH_API_URL = "api/delete-wish";

export default class WishService {
  public static async getWishs(
    token: string,
    studentId: string
  ): Promise<WishResType[]> {
    const response = await axios.get<WishResType[]>(
      `${GET_WISH_API_URL}/${studentId}`,
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
      `${ADD_WISH_API_URL}/${studentId}/${clubId}`,
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
    await axios.delete(`${DELETE_WISH_API_URL}/${studentId}/${clubId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
