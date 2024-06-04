import { persisted } from "svelte-persisted-store";

export const guestStore = persisted<StoredGuestResult>("guest", {
    guest: null
});