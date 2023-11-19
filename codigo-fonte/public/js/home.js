'use strict'

import { $g_getAllCards } from './cards.js'
import { $g_getFirstInfo } from './pagesInfo.js'
import { $g_redirectTo } from './global.js'

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

export function $g_updateHomeFirstInfo() {
    const firstImage = document.querySelector('#first-image')
    const firstTitle = document.querySelector('#fisrt-title')
    const firstDescription = document.querySelector('#first-description')
    const firstButton = document.querySelector('#first-button')
    
    const firstInfo = $g_getFirstInfo()

    firstImage.src = firstInfo.image
    firstTitle.textContent = firstInfo.title
    firstDescription.textContent = firstInfo.description
    firstButton.textContent = firstInfo.button
    firstButton.classList = `btn custom--${firstInfo.button_type}`

    firstButton.addEventListener('click', function(e){
        e.preventDefault()
        $g_redirectTo(firstInfo.button_href)
    })
}