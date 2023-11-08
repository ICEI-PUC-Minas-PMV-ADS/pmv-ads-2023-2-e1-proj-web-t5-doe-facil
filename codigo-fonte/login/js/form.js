'use strict'

import { $g_getFormInputs } from '../../public/js/form.js'
import { $g_redirectTo } from '../../public/js/global.js'
import { $g_createSession } from '../../public/js/session.js'
import { registerUser, validateLogin } from './database.js'

const donatorForm = document.querySelector('#donator-form')
const institutionForm = document.querySelector('#institution-form')
const accessForm = document.querySelector('#access-form')

export const submitCreateUser = (type) => {
    const formElement = type === 'donator' ? donatorForm : institutionForm
    const user = registerUser($g_getFormInputs(formElement))
    $g_createSession(user.id, user.type)
    $g_redirectTo('dashboard/donations')
}

export const submitLogin = () => {
    try {
        const user = validateLogin($g_getFormInputs(accessForm))
        $g_createSession(user.id, user.type)
        $g_redirectTo('dashboard/donations')
    } catch (e) {
        alert(e.message)
    }
}
