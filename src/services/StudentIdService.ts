const LOCAL_STORAGE_TOKEN_KEY_NAME = "studentid";

export default class StudentIdService {
  public static get(): string | null {
    return localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY_NAME);
  }
  public static set(studentId: string): void {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY_NAME, studentId);
  }
  public static remove(): void {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY_NAME);
  }
}
