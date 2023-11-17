'use strict'

import { $g_redirectTo } from './global.js'
import { $g_getAllUsers, $g_handleUsersEmpty } from './user.js'

export const $g_getSession = () => {
    return JSON.parse(localStorage.getItem('session'))
}

export const $g_createSession = (id, type) => {
    localStorage.setItem('session', JSON.stringify({ id, type }))
}

export const $g_clearSession = () => {
    localStorage.removeItem('session')
    $g_checkSession()
}

export const $g_checkSession = () => {
    if (!$g_getSession()) {
        $g_redirectTo('login')
    }
}

export const $g_getSessionUser = () => {
    const session = $g_getSession()
    const users = $g_getAllUsers()

    if (!session) return $g_handleUsersEmpty()

    const [user] = users.filter((user) => user.id === session.id)
    return user
}
