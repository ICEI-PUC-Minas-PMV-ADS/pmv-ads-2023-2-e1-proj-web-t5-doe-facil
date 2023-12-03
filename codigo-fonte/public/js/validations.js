const cpfValidation = (value) => {
    return {
        valid: value.match(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/),
        message: 'CPF inválido.',
    }
}

const cnpjValidation = (value) => {
    return {
        valid: value.match(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/),
        message: 'CNPJ inválido.',
    }
}

const phoneValidation = (value) => {
    return {
        valid: value.match(
            /^\(?[1-9]{2}\)? ?(?:[2-8]|9[0-9])[0-9]{3}\-?[0-9]{4}$/
        ),
        message: 'Telefone inválido.',
    }
}

const cepValidation = (value) => {
    return {
        valid: value.match(/\d{5}-\d{3}/),
        message: 'CEP inválido.',
    }
}

const emailValidation = (value) => {
    return {
        valid: value.match(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
        message: 'Email inválido.',
    }
}

const minMaxValidation = (value, config) => {
    const { min = 1, max = 100, label = 'Texto', short = false } = config
    return {
        valid: value.length >= min && value.length <= max,
        message:
            value.length <= min
                ? (short ? 'Mínimo ' : `O tamanho mínimo para ${label} é `) +
                  `${min} caracteres.`
                : (short ? `Máximo ` : `O tamanho máximo para "${label}" é `) +
                  `${max} caracteres.`,
    }
}

export const $g_clearElementListErrors = (list) => {
    list.forEach((i) => {
        const element = document.getElementById(i.id)
        if (!element) return false

        const elementErrorMessage = document.getElementById(
            element.id + '_error_message'
        )

        clearElementError(element, elementErrorMessage)
    })
}

const clearElementError = (element, elementErrorMessage) => {
    element.classList.remove('is-invalid')

    if (elementErrorMessage) {
        elementErrorMessage.style.display = 'none'
    }
}

const validateElement = (element, value, validator, config = {}) => {
    const validation = validator(value, config)
    const elementErrorMessage = document.getElementById(
        element.id + '_error_message'
    )

    if (validation.valid) {
        clearElementError(element, elementErrorMessage)
    } else {
        element.classList.add('is-invalid')
        if (elementErrorMessage) {
            elementErrorMessage.textContent = validation.message
            elementErrorMessage.style.display = 'block'
        }
    }

    return validation.valid
}

export const $g_makeValidationWatch = (config) => {
    const element = document.getElementById(config.id)
    if (!element) return false

    element.addEventListener('input', (e) => {
        $g_makeValidation(config, e.value)
    })
}

export const $g_addValidationElementWatch = (list) => {
    list.forEach((config) => {
        $g_makeValidationWatch(config)
    })
}

export const $g_makeValidation = (config, value = null) => {
    const element = config.element
        ? config.element
        : document.getElementById(config.id)
    if (!element) return false

    return validateElement(
        element,
        value ? value : element.value,
        $g_validators[config.type],
        config
    )
}

export const $g_validateElementList = (list) => {
    let valid = true

    list.forEach((config) => {
        const isValid = $g_makeValidation(config)
        if (!isValid) valid = isValid
    })

    return valid
}

export const $g_validators = {
    cpf: cpfValidation,
    email: emailValidation,
    cnpj: cnpjValidation,
    minMax: minMaxValidation,
    cep: cepValidation,
    phone: phoneValidation,
}
