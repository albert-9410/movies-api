export interface User {
  _id: string;
  username: string;
  password: string;
}

export type UserConditions = Partial<User>;
