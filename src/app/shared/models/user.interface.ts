export interface UserI {
  email: string;
  username: string;
  password?: string;
  displayName?: string;
  phoneNumber?: string;
}

export class User implements UserI {
  displayName: string;
  email: string;
  password: string;
  phoneNumber: string;
  username: string;
}
