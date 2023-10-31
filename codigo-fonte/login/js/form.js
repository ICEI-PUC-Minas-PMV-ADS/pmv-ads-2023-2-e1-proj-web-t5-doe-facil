'use strict'

import { registerUser, validateLogin } from './database.js'

const donatorForm = document.querySelector('#donator-form')
const institutionForm = document.querySelector('#institution-form')
const accessForm = document.querySelector('#access-form')

export const getFormInputs = (form = 'access') => {
    const formElement =
        form === 'access'
            ? accessForm
            : form === 'donator'
            ? donatorForm
            : institutionForm
    const formInputs = formElement.querySelectorAll('.form_item')

    const inputs = [...formInputs].map((input) => ({
        input: `${input.id
            .replace('donator_', '')
            .replace('institution_', '')
            .replace('access_', '')}`,
        value: input.value,
    }))

    const payload = {}

    for (const input of inputs) {
        payload[input.input] = input.value
    }

    return payload
}

export const submitCreateUser = (type) => {
    registerUser(getFormInputs(type))
}

export const submitLogin = () => {
    try {
        const user = validateLogin(getFormInputs('access'))
        $g_createSession(user.id, user.type)
        $g_redirectTo('dashboard/donations')
    } catch (e) {
        alert(e.message)
    }
}
