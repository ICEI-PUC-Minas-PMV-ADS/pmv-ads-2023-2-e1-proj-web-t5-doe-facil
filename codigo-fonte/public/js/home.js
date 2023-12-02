'use strict'

import { $g_getAllCards } from './cards.js'
import { $g_getFirstInfo } from './pagesInfo.js'
import { $g_redirectTo } from './global.js'
import { $g_getLastTestimonials } from './testimony.js'

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
                        alt="${cardItem.title}"
                    />
                </div>
                <div class="card__footer">
                    <p>${cardItem.description}</p>
                    <button
                        class="btn custom--${cardItem.button_type} btn--custom btn--100"
                    >
                        ${cardItem.button_label}
                        </button>
                </div>
            </section>
        `

        card.querySelector('button').addEventListener('click', (e) => {
            e.preventDefault()
            $g_redirectTo(cardItem.button_href)
        })

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

function _updateTestimonyInfo(testimony) {
    const testimonySlide = document.getElementById('testimony')

    testimonySlide.innerHTML = `
        <div class="slide">
            <blockquote class="slide__quote">
                "${testimony.text}"
            </blockquote>
            
            <strong class="slide__author">
                ${testimony.author_name}
            </strong>
            <p class="slide__role">${testimony.author_type === 'donator' ? 'Doador da DoeFácil' : 'Instituição' }</p>
        </div>
    `
}

export function $g_createTestimonySlides(){
    const testimonyNavigation = document.getElementById ('testimony-navigation')
    const lastTestimonials = $g_getLastTestimonials()
    let count = 0

    if(!lastTestimonials.length) document.getElementById('slide__block').style.display = 'none'

    if (lastTestimonials.length) {
        _updateTestimonyInfo(lastTestimonials[0])
    }

    for(const testimony of lastTestimonials) {
        count = count++

        const label = document.createElement('label')
        label.for = `radio_${count}`
        label.classList = 'manual-btn'

        const radio = document.createElement('input')
        radio.id = `radio_${count}`
        radio.type = 'radio'
        radio.name = 'slide-item'
        radio.classList = 'radio'
        radio.value = count

        label.addEventListener('click', () => {
            _updateTestimonyInfo(testimony)
        })

        testimonyNavigation.appendChild(label)
        testimonyNavigation.appendChild(radio)
    }
    
}
