import { atom } from "recoil";

export const CounterAtom = atom({
    default: 0,
    key: 'counter'
})