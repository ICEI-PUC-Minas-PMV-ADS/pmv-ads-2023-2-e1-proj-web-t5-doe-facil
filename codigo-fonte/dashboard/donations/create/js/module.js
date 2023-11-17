'use strict'

import { $g_makeLateralMenu } from '../../../../public/js/components.js'
import { $g_saveDonationDraft } from '../../../../public/js/donation.js'

import { addDonationFields, getFormInputs, submitForm } from './form.js'
import { checkPermissions, mountForm } from './lifecycles.js'

$g_makeLateralMenu('create-donation')
checkPermissions()

const form = document.querySelector('#donation-form')
const { donationElementField } = mountForm()

form.addEventListener('submit', (e) => {
    e.preventDefault()
    submitForm(getFormInputs())
})

form.querySelector('#draft').addEventListener('click', (e) => {
    e.preventDefault()
    $g_saveDonationDraft(getFormInputs())
})

form.querySelector('#add-donation-item').addEventListener('click', (e) => {
    e.preventDefault()
    addDonationFields(donationElementField)
})
