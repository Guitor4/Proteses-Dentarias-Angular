export interface IUser {
  id: number;
  name: string;
  lastName: string;
  email: string;
  username?: string;
  password?: string;
  activeSession?: string;
}

export interface UserSession {
  user: {
    id: number;
    name: string;
    lastName: string;
    email: string;
  };
  token: string;
  id: number;
}

export class User {
  id: number;
  name: string;
  lastName: string;
  email: string;
  username?: string;
  password?: string;
  activeSession?: string;

  constructor(user: IUser) {
    this.id = user.id;
    this.name = user.name;
    this.lastName = user.lastName;
    this.email = user.email;
    this.username ??= user.username;
    this.password ??= user.password;
    this.activeSession ??= user.activeSession;
  }
}
