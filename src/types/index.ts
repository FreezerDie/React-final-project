export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

export interface ProductState {
  items: Product[];
  isLoading: boolean;
  error: string | null;
}
