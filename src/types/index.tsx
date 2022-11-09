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
  singleOrders: SingleOrderI[];
  userId: string;
  summary: number;
};

export type SingleOrderI={
  id?:string;
  amount: number;
  description: string;
  productId:string;
  product:ProductI;
  cart:CartI;
  cartId:string;
}
export type CartItemI={
  name:string;
  
}
export type RegisterUserInput = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export interface LoginUserInput
  extends Omit<RegisterUserInput, "username" | "confirmPassword"> {}

export interface ServerGenericResponse {
  data: object;
  error: string;
  statusCode: number;
}

export interface ServerResponse<T> {
  data: T;
  error: string;
  statusCode: number;
}

export interface ServerResponseWithCount<T> {
  data: {
    products: T;
    count: number;
  };
  error: string;
  statusCode: number;
}

export interface ProductI {
  id: string;
  name: string;
  price: number;
  plu: number;
  unit: UnitI;
  categoryId: string;
  category: CategoryI;
  photo?: string;
  // singleOrder
}

export interface CategoryI {
  id: string;
  title: string;
}

export interface InputProductI extends Omit<ProductI, "id" | "category"> {}
export enum UnitI {
  gram = "gram",
  pcs = "pcs",
}
