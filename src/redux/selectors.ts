import { RootState } from "./store";

const productSelector = (state: RootState) => state.Products;

export { productSelector };
