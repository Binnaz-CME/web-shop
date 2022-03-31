import { atom } from "recoil";

export const authState = atom({
  key: "authState",
  default: "",
});

export const userState = atom({
  key: "user",
  default: null,
});

export const usernameState = atom({
  key: "username",
  default: "",
});

export const passwordState = atom({
  key: "password",
  default: "",
});
