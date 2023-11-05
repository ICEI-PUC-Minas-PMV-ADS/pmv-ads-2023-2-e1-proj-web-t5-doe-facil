'use strict'

export const saveDraft = (draft) => {
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

export const getDraft = () => {
    const { id: userId } = $g_getSessionUser()
    const drafts = JSON.parse(localStorage.getItem('donation_drafts'))

    if (!drafts || !drafts.length) return null

    const index = drafts.findIndex((d) => d.userId === userId)

    if (index === -1) return null
    return drafts[index]
}

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
    localStorage.removeItem('donation_drafts')
}
