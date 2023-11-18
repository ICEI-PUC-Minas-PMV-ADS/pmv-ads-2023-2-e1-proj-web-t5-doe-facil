'use strict';

import { $g_makeLateralMenu } from "../../../public/js/components.js";
import { $g_injectInputForm } from "../../../public/js/form.js";
import { $g_getFirstInfo } from "../../../public/js/pagesInfo.js";
import { $g_checkAdminPermissions } from "../../../public/js/permissions.js";
import { updateHomeCardList } from "./components.js";
import { submitHomeCardForm, submitFirstForm } from "./form.js";

$g_checkAdminPermissions()
$g_makeLateralMenu('general')


const firstForm = document.querySelector('#first-form')
$g_injectInputForm($g_getFirstInfo(), firstForm, 'first_')

firstForm.addEventListener('submit', (e) => {
    e.preventDefault()
    submitFirstForm(firstForm)
})

const cardForm = document.querySelector('#card-form')
cardForm.addEventListener('submit', (e) => {
    e.preventDefault()
    submitHomeCardForm(cardForm)
})

updateHomeCardList()
