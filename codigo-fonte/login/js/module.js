'use strict'

import { $g_redirectTo } from '../../public/js/global.js'
import { $g_getSession } from '../../public/js/session.js'
import { $g_createUsersTable, $g_getAllUsers } from '../../public/js/user.js'

import { submitCreateUser, submitLogin } from './form.js'

const donatorForm = document.querySelector('#donator-form')
const institutionForm = document.querySelector('#institution-form')
const accessForm = document.querySelector('#access-form')

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

$g_createUsersTable()

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
