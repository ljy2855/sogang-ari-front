const LOCAL_STORAGE_TOKEN_KEY_NAME = "userId";

export default class UserIdService {
  public static get(): string | null {
    return localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY_NAME);
  }
  public static set(userId: string): void {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY_NAME, userId);
  }
  public static remove(): void {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY_NAME);
  }
}
