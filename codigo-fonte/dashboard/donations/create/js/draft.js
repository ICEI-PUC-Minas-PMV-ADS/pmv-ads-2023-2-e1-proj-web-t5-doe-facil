'use strict'

import { addDonationFields } from './form.js'
import { getDraft } from './database.js'

const form = document.querySelector('#donation-form')

export const injectFormDraft = (donationElementField) => {
    let draft = getDraft()

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
