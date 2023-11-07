'use strict'

import { createCheckBoxElements } from "./form.js"

const donatorForm = document.querySelector('#donator-form')
const institutionForm = document.querySelector('#institution-form')
const institutionAboutForm = document.querySelector('#institution-about-form')

export const mountForms = () => {
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
