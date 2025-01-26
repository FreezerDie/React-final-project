export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  category: "breakfast" | "lunch" | "dinner";
  image: string;
};

export interface ProductState {
  items: Product[];
  isLoading: boolean;
  error: string | null;
}

export type User = {
  id: number;
  username: string;
  password: string;
};
