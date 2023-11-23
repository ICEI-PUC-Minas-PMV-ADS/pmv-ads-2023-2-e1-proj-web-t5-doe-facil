'use strict'

import { $g_getDonationDraft } from '../../../../public/js/donation.js'
import { $g_getSessionUser } from '../../../../public/js/session.js'

import { addDonationFields } from './form.js'

const form = document.querySelector('#donation-form')

const donationToDraft = (donation) => {
    const donations = [...donation.donations]
    delete donation.donations

    const draft = {
        inputs: [],
        donations: [],
    }

    for (const prop in donation) {
        draft.inputs.push({ input: prop, value: donation[prop] })
    }

    for (const item of donations) {
        const d = []

        for (const prop in item) {
            d.push({ input: prop, value: item[prop] })
        }

        draft.donations.push(d)
    }

    return draft
}

export const injectFormDraft = (donationElementField, donation = null) => {
    let draft = $g_getDonationDraft()

    if (donation && donation.id) {
        draft = donationToDraft(donation)
    }

    if (!draft) {
        const user = $g_getSessionUser()
        draft = { inputs: [] }

        for (const prop in user) {
            draft.inputs.push({ input: prop, value: user[prop] })
        }
    }

    if (draft.inputs) {
        for (const input of draft.inputs) {
            const selectedInput = form.querySelector(`#${input.input}`)
            if (selectedInput) selectedInput.value = input.value
        }
    }

    if (draft.donations) {
        let donationFields = form.querySelectorAll('.donation_fields')
        const { donations } = draft

        while (donationFields.length < donations.length) {
            addDonationFields(donationElementField)
            donationFields = form.querySelectorAll('.donation_fields')
        }

        for (const fields of donationFields) {
            const donation = donations.shift()

            for (const input of donation) {
                const field = fields.querySelector(`#${input.input}`)
                if (field) field.value = input.value
            }
        }
    }
}
