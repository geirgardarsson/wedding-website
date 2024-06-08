type StoredGuestResult = {
    guest: StoredGuest | null
}

type StoredSpouse = {
    spouse: StoredGuest | null
    guestId: number | null
}

type StoredGuest = {
    firstName: string
    lastName: string
    going: boolean
    diet: string
    id: number
}