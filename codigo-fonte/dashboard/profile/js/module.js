'use strict'

import { $g_makeLateralMenu } from '../../../public/js/components.js'
import { $g_checkSession } from '../../../public/js/session.js'
import {
    submitAboutForm,
    submitChangePasswordForm,
    submitForm,
} from './form.js'
import { mountForms } from './lifecycles.js'

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

mountForms()

$g_checkSession()
$g_makeLateralMenu('profile')
