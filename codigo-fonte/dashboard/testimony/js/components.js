'use strict'

import { $g_getSessionUser } from '../../../public/js/session.js'
import {
    $g_getAllTestimony,
    $g_getUserTestimony,
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

    for (const t of testimonials) {
        const testimonyUser = $g_getUserById(t.author)
        if (testimonyUser)
            testimonyDiv.appendChild(
                createTestimonyItem(t.id, t.text, testimonyUser.name)
            )
    }
}
