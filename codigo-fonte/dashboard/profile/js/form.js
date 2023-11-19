'use strict'

import { $g_getFormInputs } from "../../../public/js/form.js"
import { $g_getSessionUser } from "../../../public/js/session.js"
import { $g_updateUserInfo } from "../../../public/js/user.js"

export const submitChangePasswordForm = (form) => {
    const user = $g_getSessionUser()
    const inputs = $g_getFormInputs(form)
    console.log(user)
    if (user.password != inputs.old) {
        alert('Senha atual incorreta')
        return
    }

    if (inputs.new != inputs.confirm) {
        alert('As senhas não coincidem')
        return
    }

    $g_updateUserInfo({ password: inputs.new })
    alert('Senha alterada com sucesso!')
}

export const submitAboutForm = (form) => {
    const user = $g_getSessionUser()
    if (user.type !== 'institution') return

    const inputs = $g_getFormInputs(form)
    let checkTypes = form.querySelectorAll('.check_item')

    checkTypes = [...checkTypes]
        .map(({ checked, value, id }) => ({
            checked,
            value,
            id,
        }))
        .filter(({ checked }) => checked)
        .map(({ value }) => value)

    inputs.types = checkTypes
    $g_updateUserInfo(inputs)

    alert('Informações salvas com sucesso!')
}

export const submitForm = (form) => {
    const inputs = $g_getFormInputs(form)
    $g_updateUserInfo(inputs)

    alert('Informações salvas com sucesso!')
    location.replace(location.href)
}

export const createCheckBoxElements = (items, element) => {
    for (const item of items) {
        const checkDiv = document.createElement('div')
        const checkInput = document.createElement('input')
        const checkLabel = document.createElement('label')

        checkDiv.className = 'form-check col-6'
        checkInput.className = 'form-check-input check_item'
        checkInput.type = 'checkbox'
        checkInput.id = 'check-' + item.input
        checkInput.value = item.input

        if (item.checked) checkInput.checked = true

        checkLabel.className = 'form-check-label'
        checkLabel.htmlFor = 'check-' + item.input
        checkLabel.textContent = item.value

        checkDiv.appendChild(checkInput)
        checkDiv.appendChild(checkLabel)

        element.appendChild(checkDiv)
    }
}
