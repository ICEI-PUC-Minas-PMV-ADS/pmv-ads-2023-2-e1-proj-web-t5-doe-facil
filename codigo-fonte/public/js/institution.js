'use strict'

import { $g_getAllUsers, $g_handleUsersEmpty } from './user.js'

export const $g_getInstitutions = () => {
    const users = $g_getAllUsers()
    if (!users) return $g_handleUsersEmpty()

    return users
        .filter((user) => user.type === 'institution')
        .map((i) => ({ id: i.id, name: i.name }))
}

export const $g_getInstitutionsInfo = () => {
    const users = $g_getAllUsers()
    if (!users) return $g_handleUsersEmpty()

    return users
        .filter((user) => user.type === 'institution')
        .map((i) => {
            i.password
            return i
        })
}
