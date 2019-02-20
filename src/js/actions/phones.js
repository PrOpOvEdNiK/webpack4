export function addPhone(phone) {
    return {
        type: "ADD_PHONE",
        phone
    }
}

export function deletePhone(phone) {
    return {
        type: "DELETE_PHONE",
        phone
    }
}