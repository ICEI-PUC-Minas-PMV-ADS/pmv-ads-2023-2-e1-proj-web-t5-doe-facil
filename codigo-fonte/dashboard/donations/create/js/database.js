'use strict'

export const getInstitutions = () => {
    return [
        'Instituição 1',
        'Instituição 2',
        'Instituição 3',
        'Instituição 4',
        'Instituição 5',
    ]
}

export const getDonationTypes = () => [
    'Brinquedos',
    'Roupas',
    'Calçados',
    'Cama e banho',
    'Outro',
]

export const saveDraft = (draft) => {
    localStorage.setItem('donation_draft', JSON.stringify(draft))
    console.log('draft saved')
}

export const getDraft = () => JSON.parse(localStorage.getItem('donation_draft'))

const createNewDonationId = () => {
    let lastId = parseInt(localStorage.getItem('last_donation_id'))

    if (!lastId) lastId = 1
    else lastId += 1

    localStorage.setItem('last_donation_id', lastId)

    return lastId
}

export const saveDonation = (donation) => {
    let donations = JSON.parse(localStorage.getItem('donations'))
    if (!donations) donations = []

    donation.id = createNewDonationId()

    donations.push(donation)
    localStorage.setItem('donations', JSON.stringify(donations))
}
