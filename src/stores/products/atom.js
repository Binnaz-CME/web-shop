import { atom } from "recoil";

export const productsState = atom({
  key: "productsState",
  default: [],
});

export const filteredProductsState = atom({
  key: "filteredProductsState",
  default: null,
});
