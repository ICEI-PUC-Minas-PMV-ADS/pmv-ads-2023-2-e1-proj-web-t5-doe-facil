'use strict'

const path = `${window.location.pathname}`.split('/').filter((i) => Boolean(i))
export const PREFIX_URL = path.includes('codigo-fonte') ? '/codigo-fonte/' : '/'

export const $g_redirectTo = (path) => {
    const url = window.location.origin + PREFIX_URL + path
    window.location.href = url 
}
