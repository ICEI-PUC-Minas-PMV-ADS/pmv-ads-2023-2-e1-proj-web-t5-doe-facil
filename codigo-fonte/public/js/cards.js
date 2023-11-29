'use strict'

import { _cardSeed } from './data.js'
import { _createNewId } from './database.js'

export const $g_getAllCards = () => {
    let cards = JSON.parse(localStorage.getItem('cards'))
    if (!cards) cards = []
    return cards
}

export const $g_createCard = ({
    title,
    image,
    description,
    button_label,
    button_href,
    button_type = 'primary',
    type,
}) => {
    let cards = $g_getAllCards()

    cards.push({
        id: _createNewId('card'),
        title,
        image,
        description,
        button_href,
        button_label,
        button_type,
        type,
    })

    localStorage.setItem('cards', JSON.stringify(cards))
}

export const $g_deleteCard = (id) => {
    let cards = $g_getAllCards()
    cards = cards.filter((card) => card.id !== id)
    localStorage.setItem('cards', JSON.stringify(cards))
}

export const $g_createCardsTable = () => {
    let cards = JSON.parse(localStorage.getItem('cards'))

    if (!cards) {
        cards = _cardSeed()
    }

    localStorage.setItem('cards', JSON.stringify(cards))
}
