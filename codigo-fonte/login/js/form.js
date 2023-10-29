'use strict'

import { registerUser } from './database.js'

const donatorForm = document.querySelector('#donator-form')
const institutionForm = document.querySelector('#institution-form')

export const getFormInputs = (form = 'donator') => {
    const formElement = form === 'donator' ? donatorForm : institutionForm
    const formInputs = formElement.querySelectorAll('.form_item')

    return [...formInputs].map((input) => ({
        input: `${input.id.replace(
            form === 'donator' ? 'donator_' : 'institution_',
            ''
        )}`,
        value: input.value,
    }))
}
export const createPayload = (inputs) => {
    const payload = {}

    for (const input of inputs) {
        payload[input.input] = input.value
    }

    return payload
}
export const submitCreateUser = (type) => {
    registerUser(createPayload(getFormInputs(type)))
}
