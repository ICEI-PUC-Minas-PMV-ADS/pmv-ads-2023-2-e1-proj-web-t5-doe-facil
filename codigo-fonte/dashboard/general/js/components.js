'use strict'

import { $g_deleteCard, $g_getAllCards } from '../../../public/js/cards.js'

export const createCardItem = ({
    id,
    title,
    image,
    description,
    button_label,
    button_type,
    button_href,
}) => {
    const cardItem = document.createElement('div')
    cardItem.classList = 'panel_card__item'
    cardItem.id = 'card_' + id

    cardItem.innerHTML = `
        <h4>${title}</h4>
        <p>
            Descrição: ${description}<br/>
            Imagem: ${image}<br/>
            Botão: ${button_label}<br/>
            Tipo de Botão: ${button_type}<br/>
            Rota: ${button_href}
        </p>

        <button type="button" class="btn btn-danger btn-sm delete__button">
            Excluir
        </button>
    `

    cardItem.querySelector('.delete__button').addEventListener('click', (e) => {
        e.preventDefault()
        $g_deleteCard(id)
        updateHomeCardList()
    })

    return cardItem
}

export const updateHomeCardList = () => {
    const cardsDiv = document.querySelector('#cards')
    cardsDiv.innerHTML = ''

    const cards = $g_getAllCards()

    for (const card of cards) {
        cardsDiv.appendChild(createCardItem(card))
    }
}
