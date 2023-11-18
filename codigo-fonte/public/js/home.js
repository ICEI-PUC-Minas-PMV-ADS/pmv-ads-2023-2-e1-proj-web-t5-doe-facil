'use strict'

import { $g_getAllCards } from './cards.js'

export const $g_getHomeCardsInfo = () => {
    return $g_getAllCards().filter((c) => c.type === 'home')
}

export const $g_makeHomeCards = () => {
    const homeCards = document.querySelector('#home-cards')

    const cardList = $g_getHomeCardsInfo()

    for (const cardItem of cardList) {
        const card = document.createElement('div')
        card.classList = 'col-lg-4'
        card.innerHTML = `
<section class="card__item">
    <div class="card__header">
        <h2 class="card__title">${cardItem.title}</h2>

        <img
            src="${cardItem.image}"
            alt="Doações Caixa"
        />
    </div>
    <div class="card__footer">
        <p>${cardItem.description}</p>
        <button
            class="btn custom--${cardItem.button_type} btn--custom btn--100"
        >
            ${cardItem.button}
            </button>
    </div>
</section>
`
        homeCards.appendChild(card)
    }
}
