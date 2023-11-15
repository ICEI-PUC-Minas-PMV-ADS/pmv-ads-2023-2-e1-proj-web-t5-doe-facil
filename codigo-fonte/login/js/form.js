'use strict'

import { $g_getFormInputs } from '../../public/js/form.js'
import { $g_redirectTo } from '../../public/js/global.js'
import { $g_createSession } from '../../public/js/session.js'
import { $g_getAllUsers, $g_registerUser } from '../../public/js/user.js'

const donatorForm = document.querySelector('#donator-form')
const institutionForm = document.querySelector('#institution-form')
const accessForm = document.querySelector('#access-form')

const _validateLogin = (payload) => {
    const users = $g_getAllUsers()
    const user = users.find(
        (u) => u.email === payload.email && u.password === payload.password
    )

    if (!user) throw new Error('Usuário ou senha inválidos.')

    return user
}
export const submitCreateUser = (type) => {
    const formElement = type === 'donator' ? donatorForm : institutionForm
    const user = $g_registerUser($g_getFormInputs(formElement))
    $g_createSession(user.id, user.type)
    $g_redirectTo('dashboard/donations')
}

export const submitLogin = () => {
    try {
        const user = _validateLogin($g_getFormInputs(accessForm))
        $g_createSession(user.id, user.type)
        $g_redirectTo('dashboard/donations')
    } catch (e) {
        alert(e.message)
    }
}
