'use strict'

import { addDonationFields, getFormInputs, submitForm } from './form.js'
import { saveDraft } from './database.js'
import { mountForm } from './lifecycles.js'

const form = document.querySelector('#donation-form')
const { donationElementField } = mountForm()

form.addEventListener('submit', (e) => {
    e.preventDefault()
    submitForm(getFormInputs())
})

form.querySelector('#draft').addEventListener('click', (e) => {
    e.preventDefault()
    saveDraft(getFormInputs())
})

form.querySelector('#add-donation-item').addEventListener('click', (e) => {
    e.preventDefault()
    addDonationFields(donationElementField)
})

$g_checkSession()
$g_makeMenu()
$g_makeLateralMenu('create-donation')
