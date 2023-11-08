'use strict'

const path = `${window.location.pathname}`.split('/').filter((i) => Boolean(i))
export const PREFIX_URL = path.includes('codigo-fonte') ? '/codigo-fonte/' : '/'

export const $g_redirectTo = (path) => {
    window.location = PREFIX_URL + path
}
