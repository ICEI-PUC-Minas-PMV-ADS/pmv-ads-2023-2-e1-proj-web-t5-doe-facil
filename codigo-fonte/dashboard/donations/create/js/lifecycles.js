import { injectInstitutionsOptions, resetDonationFields } from './form.js'
import { injectFormDraft } from './draft.js'

export const mountForm = () => {
    const donationElementField = document
        .querySelectorAll('#donation-form .donation_fields')[0]
        .cloneNode(true)

    injectInstitutionsOptions()
    resetDonationFields(donationElementField)
    injectFormDraft(donationElementField)

    return { donationElementField }
}
