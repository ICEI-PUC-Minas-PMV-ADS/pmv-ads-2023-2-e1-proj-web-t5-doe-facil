'use strict'

import {
    createCheckBoxElements,
    submitAboutForm,
    submitChangePasswordForm,
    submitForm,
} from './form.js'

const donatorForm = document.querySelector('#donator-form')
const institutionForm = document.querySelector('#institution-form')
const institutionAboutForm = document.querySelector('#institution-about-form')
const passwordForm = document.querySelector('#password-form')

donatorForm.addEventListener('submit', (e) => {
    e.preventDefault()
    submitForm(donatorForm)
})

institutionForm.addEventListener('submit', (e) => {
    e.preventDefault()
    submitForm(institutionForm)
})

institutionAboutForm.addEventListener('submit', (e) => {
    e.preventDefault()
    submitAboutForm(institutionAboutForm)
})

passwordForm.addEventListener('submit', (e) => {
    e.preventDefault()
    submitChangePasswordForm(passwordForm)
})

const mountForms = () => {
    const user = $g_getSessionUser()
    if (user.type === 'donator') {
        $g_injectInputForm(user, donatorForm, 'donator_')
        institutionForm.style.display = 'none'
        institutionAboutForm.style.display = 'none'
        document.querySelector('.extra__block').style.display = 'none'
    } else {
        $g_injectInputForm(user, institutionForm, 'institution_')
        $g_injectInputForm(user, institutionAboutForm, 'institution_')

        createCheckBoxElements(
            $g_getDonationTypesInput(user.types),
            document.querySelector('#institution-types')
        )
        donatorForm.style.display = 'none'
    }
}

mountForms()

$g_checkSession()
$g_makeLateralMenu('profile')
