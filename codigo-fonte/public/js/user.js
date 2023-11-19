'use strict'

import { _usersSeed } from './data.js'
import { _createNewId } from './database.js'
import { $g_checkSession, $g_getSessionUser } from './session.js'

export const $g_handleUsersEmpty = () => {
    localStorage.clear()
    $g_checkSession()
}

export const $g_getAllUsers = () => {
    return JSON.parse(localStorage.getItem('users'))
}

export const $g_getUserById = (id) => {
    const users = $g_getAllUsers(id)
    const user = users.find((u) => Number(u.id) === Number(id))
    return user ? user : null
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

    if (!inputs.image) user.image = '../public/img/default.png'

    $g_updateUser(user.id, user)
}

export const $g_createUsersTable = () => {
    let table = JSON.parse(localStorage.getItem('users'))
    if (!table) table = _usersSeed()
    $g_updateUsers(table)
}

export const $g_registerUser = (user) => {
    let users = JSON.parse(localStorage.getItem('users'))

    if (!users) {
        $g_createUsersTable()
        return $g_registerUser(user)
    }

    user.id = _createNewId()
    user.image = '../public/img/default.png'
    users.push(user)

    localStorage.setItem('users', JSON.stringify(users))
    return user
}
