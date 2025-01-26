import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

const productSelector = (state: RootState) => state.Products.items;

const productBreakfastSelector = createSelector(productSelector, (items) =>
  items.filter((item) => item.category === "breakfast")
);

const productLunchSelector = createSelector(productSelector, (items) =>
  items.filter((item) => item.category === "lunch")
);

const productDinnerSelector = createSelector(productSelector, (items) =>
  items.filter((item) => item.category === "dinner")
);
export {
  productSelector,
  productBreakfastSelector,
  productLunchSelector,
  productDinnerSelector,
};
