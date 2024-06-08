import { persisted } from "svelte-persisted-store";

export const guestStore = persisted<StoredGuestResult>("guest", {
    guest: null,
});

export const spouseStore = persisted<StoredSpouse>("spouse", {
    spouse: null,
    guestId: null,
})