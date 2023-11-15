'use strict'

export const $g_getFormInputs = (formElement) => {
    const formInputs = formElement.querySelectorAll('.form_item')

    const inputs = [...formInputs].map((input) => ({
        input: `${input.id
            .replace('donator_', '')
            .replace('institution_', '')
            .replace('access_', '')
            .replace('password_', '')
            .replace('testimony_', '')}`,
        value: input.value,
    }))

    const payload = {}

    for (const input of inputs) {
        payload[input.input] = input.value
    }

    return payload
}

export const $g_injectInputForm = (values, form, prefix = '') => {
    for (const prop in values) {
        const selectedInput = form.querySelector(`#${prefix + prop}`)
        if (selectedInput) selectedInput.value = values[prop]
    }
}
