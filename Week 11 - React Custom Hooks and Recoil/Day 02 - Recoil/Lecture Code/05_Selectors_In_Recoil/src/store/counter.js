import {atom, selector} from 'recoil';

export const counterAtom = atom({
    default: 0,
    key: "counter"
});

export const evenSelector = selector({
    key: "isEvenSelector",
    get: function({get}){
        const count = get(counterAtom);
        const isEven = (count % 2 === 0);
        return isEven;
    }
})