import {atom} from 'recoil';

export const networkAtom = atom({
    key: "networkAtom", // unique ID (with respect to other atoms/selectors)
    default: 102
});

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
});

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 12
});

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
});