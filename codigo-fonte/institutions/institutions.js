'use strict'

import { $g_redirectTo } from "../public/js/global.js"
import { $g_getInstitutionsInfo } from "../public/js/institution.js"

const makeInstitutionList = () => {
    const institutions = $g_getInstitutionsInfo()
    const institutionDiv = document.getElementById('institutions')

    for(const institution of institutions) {
        const card = document.createElement('div')
        card.classList = 'col-12 col-lg-4'
        card.innerHTML = `
            <section class="card__item">
                <div class="card__header">
                    <h2 class="card__title">${institution.name}</h2>

                    <img
                        src="${institution.image}"
                        alt="${institution.name}"
                    />
                </div>
                <div class="card__footer">
                    <p>${institution.description}</p>

                    <button
                        class="btn custom--primary btn--custom btn--100"
                    >
                        Quero saber mais!
                    </button>
                </div>
            </section>
        `

        card.querySelector('button').addEventListener('click', (e) => {
            e.preventDefault()
            $g_redirectTo(`institutions/about/?id=${institution.id}`)
        })

        institutionDiv.appendChild(card)
    }
}

makeInstitutionList()
