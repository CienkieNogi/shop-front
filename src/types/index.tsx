export type UserI = {
  id: string;
  username: string;
  email: string;
  password: string;
  role?: "USER" | "ADMIN";
  Cart?: CartI;
};
export type CartI = {
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

export interface ServerResponse<T> {
  data:T;
  error:string;
  statusCode:number;
}
export interface ProductI{
  id:string;
  name:string;
  price:number;
  plu:number;
  unit:UnitI
  categoryId:string;
  category:CategoryI;
  photo?:string;
  // singleOrder
}
export interface CategoryI {
  id:string;
  title: string;
}
export interface InputProductI extends Omit<ProductI,'id'>{}
export enum UnitI{
  gram = 'gram',
  pcs = 'pcs'
}

