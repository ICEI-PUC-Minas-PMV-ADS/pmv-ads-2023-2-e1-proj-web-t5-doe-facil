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

export const $g_getSessionUserType = () => {
    const user = $g_getSession()
    return user.type
}

export const $g_sessionUserIsInstitution = () => {
    return $g_getSessionUserType() === 'institution'
}

export const $g_sessionUserIsDonator = () => {
    return $g_getSessionUserType() === 'donator'
}

export const $g_sessionUserIsAdmin = () => {
    return $g_getSessionUserType() === 'admin'
}
