'use strict'

import { $g_makeLateralMenu } from '../../../public/js/components.js'
import { $g_checkSession } from '../../../public/js/session.js'
import { updateTestimonyList } from './components.js'
import { submitTestimonyForm } from './form.js'

const testimonyForm = document.querySelector('#testimony-form')
testimonyForm.addEventListener('submit', (e) => {
    e.preventDefault()
    submitTestimonyForm(testimonyForm)
})

updateTestimonyList()

$g_checkSession()
$g_makeLateralMenu('testimony')
