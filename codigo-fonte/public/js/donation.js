'use strict'

import { $g_getSessionUser } from './session.js'
import { $g_getUser } from './user.js'

const _resumeDonationTypes = (donations) => {
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
            dDTO.donations_type = _resumeDonationTypes(d.donations)
            return dDTO
        })
}

export const $g_saveDonationDraft = (draft) => {
    const { id: userId } = $g_getSessionUser()
    let drafts = JSON.parse(localStorage.getItem('donation_drafts'))

    if (drafts && drafts.length) {
        const index = drafts.findIndex((d) => d.userId === userId)
        if (index !== -1) drafts.splice(index, 1)
    } else {
        drafts = []
    }

    draft.userId = userId
    drafts.push(draft)

    localStorage.setItem('donation_drafts', JSON.stringify(drafts))
}

const _createNewDonationId = () => {
    let lastId = parseInt(localStorage.getItem('last_donation_id'))

    if (!lastId) lastId = 1
    else lastId += 1

    localStorage.setItem('last_donation_id', lastId)

    return lastId
}

export const $g_saveDonation = (donation) => {
    let donations = JSON.parse(localStorage.getItem('donations'))
    if (!donations) donations = []

    donation.id = _createNewDonationId()
    donations.push(donation)

    localStorage.setItem('donations', JSON.stringify(donations))
    localStorage.removeItem('donation_drafts')
}

export const $g_getDonationDraft = () => {
    const { id: userId } = $g_getSessionUser()
    const drafts = JSON.parse(localStorage.getItem('donation_drafts'))

    if (!drafts || !drafts.length) return null

    const index = drafts.findIndex((d) => d.userId === userId)

    if (index === -1) return null
    return drafts[index]
}
