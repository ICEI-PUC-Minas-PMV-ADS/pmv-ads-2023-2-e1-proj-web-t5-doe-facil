'use strict'

import { $g_redirectTo } from '../../public/js/global.js'
import { $g_getSession } from '../../public/js/session.js'
import { $g_getAllUsers } from '../../public/js/user.js'
import {
    $g_addValidationElementWatch,
    $g_clearElementListErrors,
} from '../../public/js/validations.js'
import { donatorValidationsForm, institutionValiationsForm } from './data.js'

import { submitCreateUser, submitLogin } from './form.js'

const donatorForm = document.querySelector('#donator-form')
const institutionForm = document.querySelector('#institution-form')
const accessForm = document.querySelector('#access-form')

const donatorFormCol = document.getElementById('donator-form-col')
const institutionFormCol = document.getElementById('institution-form-col')

const changeToDonator = document.getElementById('change-to-donator')
const changeToInstitution = document.getElementById('change-to-institution')

const changeForm = (form) => {
    if (form === 'institution') {
        donatorFormCol.style.display = 'none'
        institutionFormCol.style = ''
    } else {
        institutionFormCol.style.display = 'none'
        donatorFormCol.style = ''
    }
}

changeToDonator.addEventListener('click', (e) => {
    e.preventDefault()
    $g_clearElementListErrors(institutionValiationsForm)
    changeForm('donator')
})

changeToInstitution.addEventListener('click', (e) => {
    e.preventDefault()
    $g_clearElementListErrors(donatorValidationsForm)
    changeForm('institution')
})

donatorForm.addEventListener('submit', (e) => {
    e.preventDefault()
    submitCreateUser('donator')
})

institutionForm.addEventListener('submit', (e) => {
    e.preventDefault()
    submitCreateUser('institution')
})

accessForm.addEventListener('submit', (e) => {
    e.preventDefault()
    submitLogin()
})

if ($g_getSession()) {
    $g_redirectTo('dashboard/donations')
}

const showAccessInfo = () => {
    console.log('Dados de Acesso:')

    $g_getAllUsers().forEach(({ email, password, name, type }) => {
        console.log(
            `${name} (${type})
Email: ${email}
Senha: ${password}
----------`
        )
    })
}

showAccessInfo()

$g_addValidationElementWatch([
    ...donatorValidationsForm,
    ...institutionValiationsForm,
])
