export type User = {
  email?: string;
  password?: string;
  id?: string;
  avatar?: string;
  name?: string;
  dateOfBirt?: string;
  gender?: string;
  address?: string;
  phoneNumber? : string;
};

export type AuthState = {
  loggedInUser: boolean;
  user: User | null;
};
