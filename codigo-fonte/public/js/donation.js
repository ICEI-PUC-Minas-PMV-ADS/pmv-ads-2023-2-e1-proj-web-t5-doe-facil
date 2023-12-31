'use strict'

import { $g_getInstitutionById } from './institution.js'
import { $g_getSessionUser } from './session.js'

const _resumeDonationTypes = (donations) => {
    let types = new Set(donations.map((d) => d.type))
    types = [...types]
    return types.length > 1 ? 'Diversos' : types[0]
}

const _getAmountDonations = (donations) => {
    return donations.reduce(
        (accumulator, donation) => accumulator + parseInt(donation.amount),
        0
    )
}

const _formatDonationStatus = (status) => {
    if (status)
        return status
            .replace('accepted', 'Aceita')
            .replace('public', 'Pública')
            .replace('new', 'Nova Doação')
    else return '-'
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

const _getDbDonations = () => {
    const donations = JSON.parse(localStorage.getItem('donations'))
    if (!donations) return []
    return donations
}

export const $g_getAllDonations = () => {
    const user = $g_getSessionUser()
    if (!user) return []

    const donations = _getDbDonations()

    return donations.map((d) => {
        const dDTO = d
        dDTO.donations_type = _resumeDonationTypes(d.donations)
        dDTO.amount = _getAmountDonations(d.donations)
        dDTO.formatted_status = _formatDonationStatus(d.status)
        dDTO.institution_name = d.institution && d.institution !== 'public'
            ? $g_getInstitutionById(d.institution).name
            : ''
        return dDTO
    })
}

export const $g_getPublicDonations = () => {
    const donations = $g_getAllDonations()
    return donations.filter((d) => d.status === 'public')
}

export const $g_getDonations = () => {
    const donations = $g_getAllDonations()
    const user = $g_getSessionUser()

    return donations.filter((d) => {
        if (user.type === 'donator')
            return Number(d.donator) === Number(user.id)
        else if (user.type === 'institution')
            return Number(d.institution) === Number(user.id)
        else return true
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

const _saveDbDonations = (donations) => {
    localStorage.setItem('donations', JSON.stringify(donations))
}

const _removeDonationDrafts = () => {
    localStorage.removeItem('donation_drafts')
}

export const $g_saveDonation = (donation) => {
    let donations = _getDbDonations()

    if (!donation.id) {
        donation.id = _createNewDonationId()
        donation.status = 'new'
    }
    if(donation.institution === 'public') donation.status = 'public' 

    donation.date = new Date().toLocaleDateString()

    if (!donation.edited) donations.push(donation)
    else {
        donations = donations.map((d) => {
            if (parseInt(d.id) === parseInt(donation.id)) return donation
            return d
        })
    }

    _saveDbDonations(donations)
    _removeDonationDrafts()

    return donation
}

export const $g_getDonationById = function (id) {
    const donationList = $g_getAllDonations()

    if (donationList.length) {
        const donation = donationList.find(
            (item) => parseInt(item.id) === parseInt(id)
        )
        return donation ? donation : null
    }

    return null
}

export const $g_getDonationDraft = () => {
    const session = $g_getSessionUser()
    if(!session) return 

    const { id: userId } = session
    const drafts = JSON.parse(localStorage.getItem('donation_drafts'))

    if (!drafts || !drafts.length) return null

    const index = drafts.findIndex((d) => d.userId === userId)

    if (index === -1) return null
    return drafts[index]
}

export const $g_deleteDonationDraft = () => {
    localStorage.removeItem('donation_drafts')
}

export const $g_acceptDonation = (id) => {
    let donations = _getDbDonations()
    const user = $g_getSessionUser()

    donations = donations.map((d) => {
        if (parseInt(d.id) === parseInt(id)) {
            d.status = 'accepted'
            d.institution = user.id
        }
        return d
    })
    _saveDbDonations(donations)
}

export const $g_rejectDonation = (id) => {
    let donations = _getDbDonations()
    donations = donations.map((d) => {
        if (parseInt(d.id) === parseInt(id)) {
            d.status = 'public'
            d.institution = 'public'
        }
        return d
    })

    _saveDbDonations(donations)
}

export const $g_deleteDonation = (id) => {
    let donations = _getDbDonations()
    _saveDbDonations(donations.filter((d) => parseInt(d.id) !== parseInt(id)))
}

export const $g_getDateFormatted = (date) => {
    if (!date) return
    let data = new Date(date)
    const dia = data.getDate().toString().padStart(2, '0')
    const mes = (data.getMonth() + 1).toString().padStart(2, '0')
    const ano = data.getFullYear()
    return `${dia}/${mes}/${ano}`
}
