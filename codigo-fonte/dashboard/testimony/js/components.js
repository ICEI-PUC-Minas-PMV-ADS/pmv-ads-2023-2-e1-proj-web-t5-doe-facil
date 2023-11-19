'use strict'

import { $g_getSessionUser } from '../../../public/js/session.js'
import {
    $g_getAllTestimony,
    $g_getUserTestimony,
    $g_deleteTestimony,
} from '../../../public/js/testimony.js'
import { $g_getUserById } from '../../../public/js/user.js'

export const createTestimonyItem = (id, text, author) => {
    const testimonyItem = document.createElement('div')
    testimonyItem.classList = 'testimony__item'
    testimonyItem.id = 'testimony_' + id

    testimonyItem.innerHTML = `
        <h4>Autor: ${author}</h4>
        <p>${text}</p>
        <button type="button" class="btn btn-danger btn-sm">
            Excluir
        </button>
    `

    testimonyItem.querySelector('button').addEventListener('click', function (e) {
        e.preventDefault()
        $g_deleteTestimony(id)
        updateTestimonyList()
    })

    return testimonyItem
}

export const updateTestimonyList = () => {
    const testimonyDiv = document.querySelector('#testimonials')
    testimonyDiv.innerHTML = ''

    const user = $g_getSessionUser()
    const testimonials =
        user.type === 'admin'
            ? $g_getAllTestimony()
            : $g_getUserTestimony(user.id)

    if (!testimonials || testimonials && testimonials.length === 0) {
        testimonyDiv.innerHTML = `<h3 class="mx-4 mt-4 text-center">Nenhum depoimento encontrado.</h3>`
    }

    for (const t of testimonials) {
        const testimonyUser = $g_getUserById(t.author)
        if (testimonyUser)
            testimonyDiv.appendChild(
                createTestimonyItem(t.id, t.text, testimonyUser.name)
            )
    }
}
