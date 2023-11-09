'use strict'

import { $g_checkSession, $g_getSessionUser } from './session.js'

export const $g_handleUsersEmpty = () => {
    localStorage.clear()
    $g_checkSession()
}

export const $g_getAllUsers = () => {
    return JSON.parse(localStorage.getItem('users'))
}

export const $g_getUser = (id, password = false) => {
    const user = $g_getAllUsers().find((user) => user.id === id)
    if (!user) return null

    if (!password) delete user.password
    return user
}

export const $g_updateUsers = (users) => {
    localStorage.setItem('users', JSON.stringify(users))
}

export const $g_updateUser = (id, values) => {
    const users = $g_getAllUsers()
    const index = users.findIndex((u) => u.id === id)

    if (index === -1) return

    users[index] = values
    $g_updateUsers(users)
}

export const $g_updateUserInfo = (inputs) => {
    const user = $g_getSessionUser()

    for (const prop in inputs) {
        user[prop] = inputs[prop]
    }

    $g_updateUser(user.id, user)
}
