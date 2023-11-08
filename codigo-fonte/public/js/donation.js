'use strict'

import { $g_getSessionUser } from './session.js'
import { $g_getUser } from './user.js'

const resumeDonationTypes = (donations) => {
    let types = new Set(donations.map((d) => d.type))
    types = [...types]
    return types.length > 1 ? 'Diversos' : types[0]
}

export const $g_getDonationTypes = () => [
    'Brinquedos',
    'Roupas',
    'Calçados',
    'Cama e banho',
    'Outro',
]

export const $g_getDonationTypesInput = (checked = []) => {
    const list = [
        { input: 'brinquedos', value: 'Brinquedos' },
        { input: 'roupas', value: 'Roupas' },
        { input: 'calcados', value: 'Calçados' },
        { input: 'cama-e-banho', value: 'Cama e Banho' },
        { input: 'outro', value: 'Outro' },
    ].map((i) => {
        if (checked.includes(i.input)) i.checked = true
        return i
    })

    return list
}

export const $g_getDonations = () => {
    const user = $g_getSessionUser()
    if (!user) return []

    const donations = JSON.parse(localStorage.getItem('donations'))

    return donations
        .filter((d) => {
            if (user.type === 'donator')
                return Number(d.donator) === Number(user.id)
            else return Number(d.institution) === Number(user.id)
        })
        .map((d) => {
            const dDTO = d
            dDTO.donator_info = $g_getUser(d.donator)
            dDTO.donations_type = resumeDonationTypes(d.donations)
            return dDTO
        })
}
