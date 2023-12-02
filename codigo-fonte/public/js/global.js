'use strict'

const path = `${window.location.pathname}`.split('/').filter((i) => Boolean(i))
export const PREFIX_URL = path.includes('codigo-fonte') ? '/codigo-fonte/' : '/'

export const $g_makeParams = (params = null) => {
    if (!params) return ''

    let paramString = ''
    for (const p in params) {
        if (p) {
            if (paramString) paramString += '&'
            paramString += p + '=' + params[p]
        }
    }

    return paramString ? '/?' + paramString : ''
}

export const $g_redirectTo = (path, params) => {
    const url =
        window.location.origin + PREFIX_URL + path + $g_makeParams(params)
    // alert(url)
    window.location.href = url
}
