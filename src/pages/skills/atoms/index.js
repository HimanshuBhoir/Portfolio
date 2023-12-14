import { atom } from "recoil";

export const focusedSectionAtom = atom({
  key: "focusedSectionAtom",
  default: 0,
});

export const onMouseEnterBackgroundAtom = atom({
  key: "onMouseEnterBackground",
  default: undefined,
});