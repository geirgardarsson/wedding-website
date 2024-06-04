type StoredGuestResult = {
    guest: StoredGuest | null
}

type StoredGuest = {
    firstName: string
    lastName: string
    going: boolean
    diet: string
    id: number
}   