'use strict'

import { createUsersTable } from './database.js'
import { submitCreateUser } from './form.js'

const donatorForm = document.querySelector('#donator-form')
const institutionForm = document.querySelector('#institution-form')

donatorForm.addEventListener('submit', (e) => {
    e.preventDefault()
    submitCreateUser('donator')
})

institutionForm.addEventListener('submit', (e) => {
    e.preventDefault()
    submitCreateUser('institution')
})

createUsersTable()
