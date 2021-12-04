export class UserModel {
  constructor(avatarUrl?: string, login?: string, type?: string) {
    this.avatarUrl = avatarUrl;
    this.login = login;
    this.type = type;
  }

  avatarUrl: string;

  login: string;

  type: string
}
