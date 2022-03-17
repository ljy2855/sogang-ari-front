import axios from "axios";

const CLUB_LOGO_API_URL = "api/club/image";

export default class ClubLogoService {
  public static async getClubLogo(club_id: number): Promise<string> {
    const response = await axios
      .get(`${process.env.REACT_APP_URL}/${CLUB_LOGO_API_URL}/${club_id}`, {
        responseType: "arraybuffer",
      })
      .then((response) =>
        Buffer.from(response.data, "binary").toString("base64")
      );
    return response;
  }
}
