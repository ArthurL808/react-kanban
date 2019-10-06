export const ADD_CARD = 'ADD_CARD'
export const LOAD_CARD = 'LOAD_CARD'

export function addCard(payload) {
    return {
        type: ADD_CARD,
        payload
    }
}

export function loadCards(payload) {
    return {
        type: LOAD_CARD,
        payload
    }
}