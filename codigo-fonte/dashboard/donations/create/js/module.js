'use strict'

import { $g_makeLateralMenu } from '../../../../public/js/components.js'
import { $g_saveDonationDraft } from '../../../../public/js/donation.js'
import { $g_checkDonatorPermissions } from '../../../../public/js/permissions.js'

import { addDonationFields, getFormInputs, submitForm } from './form.js'
import { mountForm } from './lifecycles.js'

$g_checkDonatorPermissions('dashboard/donations/create')
$g_makeLateralMenu('create-donation')

const form = document.querySelector('#donation-form')
const { donationElementField } = mountForm()

form.addEventListener('submit', (e) => {
    e.preventDefault()
    submitForm(getFormInputs())
})

const draftButton = form.querySelector('#draft')
if (draftButton) {
    draftButton.addEventListener('click', (e) => {
        e.preventDefault()
        $g_saveDonationDraft(getFormInputs())
    })
}

form.querySelector('#add-donation-item').addEventListener('click', (e) => {
    e.preventDefault()
    addDonationFields(donationElementField)
})
