export type UserI = {
  id: string;
  username: string;
  email: string;
  password: string;
  role?: "USER" | "ADMIN";
  Cart?: Cart;
};
export type Cart = {
  id: string;
  userId: string;
  summary: number;
};

export type RegisterUserInput = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};
export interface LoginUserInput extends Omit<RegisterUserInput,'username'|'confirmPassword'>{}