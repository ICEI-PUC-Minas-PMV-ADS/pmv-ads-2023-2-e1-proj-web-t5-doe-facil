'use strict'

import { $g_getDonationTypes, $g_saveDonation } from '../../../../public/js/donation.js'
import { $g_getInstitutions } from '../../../../public/js/institution.js'
import { $g_getSessionUser } from '../../../../public/js/session.js'

const form = document.querySelector('#donation-form')

export const injectInstitutionsOptions = () => {
    const select = form.querySelector('#institution')
    const institutions = $g_getInstitutions()

    for (const item of institutions) {
        select.appendChild(new Option(item.name, item.id))
    }
}

export const addDonationFields = (elementField) => {
    const items = form.querySelector('#donation-items')
    const count = items.querySelectorAll('.donation_fields').length + 1

    const donationFields = elementField.cloneNode(true)
    items.appendChild(donationFields)

    const removeButton = donationFields.querySelector('.donation_remove')
    const typeSelect = donationFields.querySelector('.type_select')

    const types = $g_getDonationTypes()

    for (const type of types) {
        typeSelect.appendChild(new Option(type))
    }

    if (count === 1) {
        removeButton.style.display = 'none'
        return
    }

    removeButton.addEventListener('click', (e) => {
        e.preventDefault()
        items.removeChild(donationFields)
    })
}

export const getFormInputs = () => {
    const formInputs = form.querySelectorAll('.form_item')

    const inputs = [...formInputs].map((input) => ({
        input: input.id,
        value: input.value,
    }))

    const donationFields = form.querySelectorAll('.donation_fields')
    const donations = []

    if (donationFields.length) {
        for (const donation of donationFields) {
            const inputs = donation.querySelectorAll('.donation_item')

            const inputList = [...inputs].map((input) => ({
                input: input.id,
                value: input.value,
            }))

            donations.push(inputList)
        }
    }

    return { inputs, donations }
}

export const removeFirstDonationField = () => {
    const items = form.querySelector('#donation-items')
    items.removeChild(items.querySelector('.donation_fields'))
}

export const resetDonationFields = (elementField) => {
    removeFirstDonationField()
    addDonationFields(elementField)
}

export const createPayload = (formInputs) => {
    const { inputs, donations } = formInputs
    const payload = { donations: [] }

    for (const input of inputs) {
        payload[input.input] = input.value
    }

    for (const donation of donations) {
        const donationObj = {}

        for (const field of donation) {
            donationObj[field.input] = field.value
        }

        payload.donations.push(donationObj)
    }

    payload.donator = $g_getSessionUser().id

    return payload
}

export const submitForm = (inputs) => {
    $g_saveDonation(createPayload(inputs))
    form.reset()

    alert('Doação criada com sucesso!')
}
