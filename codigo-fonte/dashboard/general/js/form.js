'use strict'

import { $g_createCard } from '../../../public/js/cards.js'
import { $g_getFormInputs } from '../../../public/js/form.js'
import { $g_updateFirstInfo } from '../../../public/js/pagesInfo.js'
import { updateHomeCardList } from './components.js'

export const submitHomeCardForm = (form) => {
    const inputs = $g_getFormInputs(form)
    $g_createCard(inputs)
    updateHomeCardList()
    form.reset()
}

export const submitFirstForm = (form) => {
    const inputs = $g_getFormInputs(form)
    $g_updateFirstInfo(inputs)
    alert('Dobra da página inicial atualizada com sucesso!')
}
