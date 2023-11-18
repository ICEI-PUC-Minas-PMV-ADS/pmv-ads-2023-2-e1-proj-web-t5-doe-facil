'use strict'

import { $g_makeLateralMenu } from '../../../public/js/components.js'
import {
    $g_getFormInputs,
    $g_injectInputForm,
} from '../../../public/js/form.js'
import {
    $g_getAboutInfo,
    $g_updateAboutInfo,
} from '../../../public/js/pagesInfo.js'
import { $g_checkAdminPermissions } from '../../../public/js/permissions.js'

$g_checkAdminPermissions()
$g_makeLateralMenu('about')

const aboutForm = document.querySelector('#about-form')
$g_injectInputForm($g_getAboutInfo(), aboutForm, 'about_')

export const submitAboutForm = () => {
    const inputs = $g_getFormInputs(aboutForm)
    $g_updateAboutInfo(inputs)
    alert('Página de Sobre Nós atualizada com sucesso!')
}

aboutForm.addEventListener('submit', (e) => {
    e.preventDefault()
    submitAboutForm(aboutForm)
})
