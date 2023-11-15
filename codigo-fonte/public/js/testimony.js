'use strict'

import { _createNewId } from './database.js'

export const $g_getAllTestimony = () => {
    let testimonials = JSON.parse(localStorage.getItem('testimonials'))
    if (!testimonials) testimonials = []
    return testimonials
}

export const $g_createTestimony = (text, authorId) => {
    let testimonials = $g_getAllTestimony()

    testimonials.push({
        id: _createNewId('testimony'),
        text,
        author: authorId,
    })

    localStorage.setItem('testimonials', JSON.stringify(testimonials))
}

export const $g_getUserTestimony = (id) => {
    let testimonials = $g_getAllTestimony()
    testimonials = testimonials.filter((t) => t.author === id)
    return testimonials
}
