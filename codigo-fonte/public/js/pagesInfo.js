'use strict'

import { _aboutSeed, _firstSeed } from './data.js'

const _getPagesInfo = () => {
    const pagesInfo = JSON.parse(localStorage.getItem('pages_info'))
    return pagesInfo || null
}

const _savePagesInfo = (data) => {
    localStorage.setItem('pages_info', JSON.stringify(data))
}

export const $g_updateAboutInfo = (data) => {
    const pages = _getPagesInfo()
    pages.about = data
    _savePagesInfo(pages)
}

export const $g_getAboutInfo = () => {
    const pages = _getPagesInfo()
    return pages.about || {}
}

export const $g_updateFirstInfo = (data) => {
    const pages = _getPagesInfo()
    pages.first = data
    _savePagesInfo(pages)
}

export const $g_getFirstInfo = () => {
    const pages = _getPagesInfo()
    return pages.first || {}
}

export const $g_createPagesInfoTable = () => {
    let pages = _getPagesInfo()

    if (!pages) {
        pages = {
            first: _firstSeed(),
            about: _aboutSeed(),
        }
    }

    _savePagesInfo(pages)
}
