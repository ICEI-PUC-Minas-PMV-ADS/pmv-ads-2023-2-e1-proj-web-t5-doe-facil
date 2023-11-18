'use strict'

import { $g_getFormInputs } from '../../../public/js/form.js'
import { $g_getSessionUser } from '../../../public/js/session.js'
import { $g_createTestimony } from '../../../public/js/testimony.js'
import { updateTestimonyList } from './components.js'

export const submitTestimonyForm = (form) => {
    const inputs = $g_getFormInputs(form)
    const user = $g_getSessionUser()

    $g_createTestimony(inputs.text, user.id)
    updateTestimonyList()

    form.reset()
}
